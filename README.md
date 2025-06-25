# Harper + Twilio SMS 
A [Harper Systems Component](https://docs.harperdb.io/docs/developers/components) for tracking Twilio SMS opt-outs and opt-ins.

## Why track SMS Opt-In status?
Twilio [recommends tracking your customer's SMS opt out status](https://www.twilio.com/en-us/blog/opt-in-opt-out-text-messages) per carrier and country-based legal compliance regulations regarding messaging:
> As a business, you must follow certain guidelines when adding and removing customers from your text message lists to ensure you only send messages customers want and comply with SMS regulations.

[Keeping track of your user's status](https://www.twilio.com/docs/messaging/tutorials/advanced-opt-out?_gl=1*15g499b*_gcl_au*MjQ1MjAxMDg3LjE3NDk2NTg0NDE.*_ga*MTg2MDM1Nzk5My4xNzM4OTY2MTg5*_ga_RRP8K4M4F3*czE3NTA4NzI0NzEkbzgkZzEkdDE3NTA4NzM1OTckajYwJGwwJGgw#keeping-track-of-your-users-status) (Twilio official docs)
> If you see the OptOutType property in Twilio's request to your application...You may want to store this information, but because Twilio has already sent a confirmation message/reply to your end user, we do not recommend sending another Message back from your application to the end user.

## How to use this Component with Twilio
This component offers an easy to use endpoint and storage system to add as your opt-in status tracker. The phonenumber and status is stored in a Harper datatable for easy access. Whether you are sending one-off SMS messages or a text blast you will need to make sure your customers are opted in before sending.

This component listens on inbound SMS for the [OptOutType Parameter](https://help.twilio.com/articles/31560110671259-How-to-Track-Opt-Out-Opt-In-and-Help-Messages-Using-the-OptOutType-Parameter) and subsequently updates the phone number's corresponding status.

There are several ways to listen for inbound messages on Twilio & use this component:
1. Add the endpoint for this application in your sender webhook & POST inbound data to https://this-applications-url.com/optInStatus
2. In the Twilio Console, go to your Twilio Messaging Services > select service > Integrations > select Send a webhook for Incoming Messages > add https://this-applications-url.com/optInStatus to the Request URL & leave it as a POST

## Usage

### Endpoints
| Endpoint           | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| `/optInStatus`     | Supports POST req for inbound Twilio SMS & update optin status  |
| `/PhoneNumbers`    | Direct REST interface for the PhoneNumbers table                |
