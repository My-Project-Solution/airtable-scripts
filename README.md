# airtable-scripts

## Airtable Automation Webhooks
You can use this in an Airtable automation to send a payload to a webhook URL. Define all parameters that you want to send to the webhook and "map" them within the automation. In our use case, we are using an automation that runs when a record matches a condition. The webhook is called once per record. 

### For the automation setup:
1. Use the Run Script action type.
2. Add the code in the Script box
3. Edit the script to use your webhook URL
4. "Map" the fields you want to be included in the data payload sent to the webhook

![image](https://github.com/My-Project-Solution/airtable-scripts/assets/1517528/2afe02b9-86ef-4fd2-b61e-2c4a0124ebbd)
