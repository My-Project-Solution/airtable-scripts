// Replace this with your webhook URL 
const webhookURL = 'YOUR_WEBHOOK_URL_HERE';

// Get the trigger record 
const triggerRecord = input.config(); 

// Convert record data to JSON 
const jsonRecordData = JSON.stringify(triggerRecord); 

// Send an HTTP POST request to the webhook 
await fetch(webhookURL, { 
  method: 'POST', 
  headers: { 
    'Content-Type': 'application/json', 
  }, 
  body: jsonRecordData, 
});
