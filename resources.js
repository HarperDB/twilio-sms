const optOutKeywords = ["cancel", "end", "quit", "stop", "stopall", "unsubscribe", "revoke", "optout"];
const optInKeywords = ["start", "unstop", "yes"];

function updateStatus(data) {
  const { OptOutType, From } = data;
  const optOut = OptOutType.toLowerCase();
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
  post (data) {
    // OptOutType is a conditional kv that populates on a keyword
    if (data.OptOutType) {
      return updateStatus(data);
    }
    return null;
  }
}
