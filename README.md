# Harper + Twilio SMS 
A [Harper Systems Component](https://docs.harperdb.io/docs/developers/components) for tracking Twilio SMS opt-outs and opt-ins.

## Why track SMS Opt-In Status?
Twilio [recommends tracking your customer's SMS opt out status](https://www.twilio.com/en-us/blog/opt-in-opt-out-text-messages) per carrier and country-based legal compliance regulations regarding messaging:
However, as a business, you must follow certain guidelines when adding and removing customers from your text message lists to ensure you only send messages customers want and comply with SMS regulations.

## How to use this Component
This component offers an easy to use endpoint to add as your opt-in status tracker, and stores those phone numbers in a Harper datatable for easy access. Whether you are sending one-off SMS messages or a text blast you will need to make sure your customers are opted in before sending.

This component listens on inbound SMS for the [OptOutType Parameter](https://help.twilio.com/articles/31560110671259-How-to-Track-Opt-Out-Opt-In-and-Help-Messages-Using-the-OptOutType-Parameter) and subsequently updates the phone number's corresponding status.
