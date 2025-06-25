// add endpoint to listen for the following:
// https://help.twilio.com/articles/31560110671259-How-to-Track-Opt-Out-Opt-In-and-Help-Messages-Using-the-OptOutType-Parameter

// keyval optOutType populates on ALL inbound key words: help, start, subscribe, etc.
// need to track both opt ins and opt outs
const optOutKeywords = ["cancel", "end", "quit", "stop", "stopall", "unsubscribe", "revoke", "optout"];
const optInKeywords = ["start", "unstop", "yes"];

function updateStatus(data) {
  const { OptOutType, From } = data;
  const optOut = OptOutType.toLowerCase();
  // Proceed if its an in/out opt out keyword
  if (optOutKeywords.includes(optOut) || optInKeywords.includes(optOut)) {
    const type = optOutKeywords.includes(optOut) ? 'out' : 'in';
    try {
      tables.PhoneNumbers.put({ phoneNumber: From, status: type });
      return { status: 'success', type, number: From };
    } catch (err) {
      return { status: 'failure', type, number: From, error: err };
    }
  }
}

export class optInStatus extends Resource {
  async post (data) {
    // optOutType is a conditional SMS kv that populates on any keyword, otherwise is null
    if (data.OptOutType) {
      return await updateStatus(data);
    }
    return null;
  }
}
