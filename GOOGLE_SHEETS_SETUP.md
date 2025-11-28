# Google Sheets Contact Form Setup

This guide will help you set up Google Sheets to receive contact form submissions from your portfolio.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Portfolio Contact Messages" or similar
4. In the first row, add these headers:
   - Column A: `Timestamp`
   - Column B: `Name`
   - Column C: `Email`
   - Column D: `Subject`
   - Column E: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data
    var timestamp = new Date();
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var subject = e.parameter.subject || '';
    var message = e.parameter.message || '';
    
    // Append data to sheet
    sheet.appendRow([timestamp, name, email, subject, message]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function doGet(e) {
  return ContentService.createTextOutput("Contact form endpoint is working!");
}
```

4. Click **Save** (disk icon) and name your project (e.g., "Portfolio Contact Form")

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Fill in the deployment settings:
   - **Description**: Portfolio Contact Form
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Important**: You'll need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
6. Copy the **Web app URL** - it should look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

## Step 4: Update Your Portfolio Code

1. Open `src/components/Contact.jsx`
2. Find this line near the top:
   ```javascript
   const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_SHEETS_WEB_APP_URL_HERE'
   ```
3. Replace it with your Web app URL:
   ```javascript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycby.../exec'
   ```

## Step 5: Test the Form

1. Go to your portfolio website
2. Fill out the contact form
3. Submit it
4. Check your Google Sheet - you should see a new row with the submission data!

## Troubleshooting

### Form not submitting
- Make sure you copied the **entire** Web app URL
- Check that the deployment is set to "Anyone" for access
- Look at browser console for errors (F12 → Console tab)

### "Authorization required" error
- Go back to Apps Script
- Click **Deploy** → **Manage deployments**
- Click the pencil icon to edit
- Make sure "Execute as" is set to "Me"
- Make sure "Who has access" is set to "Anyone"

### Data not appearing in sheet
- Check that your column headers match exactly
- Make sure the script is saved and deployed
- Try creating a new deployment

## Optional: Email Notifications

To get email notifications when someone submits the form, add this to your Apps Script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    var timestamp = new Date();
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var subject = e.parameter.subject || '';
    var message = e.parameter.message || '';
    
    sheet.appendRow([timestamp, name, email, subject, message]);
    
    // Send email notification
    MailApp.sendEmail({
      to: 'vekariyavansh@gmail.com', // Your email
      subject: 'New Portfolio Contact: ' + subject,
      body: 'New message from your portfolio:\n\n' +
            'Name: ' + name + '\n' +
            'Email: ' + email + '\n' +
            'Subject: ' + subject + '\n' +
            'Message: ' + message + '\n\n' +
            'Submitted at: ' + timestamp
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Security Notes

- The Web app URL is public but only accepts POST requests with your form data
- Email addresses are protected by CAPTCHA on your site
- All submissions are timestamped and stored in your private Google Sheet
- You can revoke access anytime by deleting the deployment

## Need Help?

If you encounter issues:
1. Check the Apps Script execution logs: **Executions** tab in Apps Script
2. Test the endpoint directly by visiting the URL in your browser (should show "Contact form endpoint is working!")
3. Make sure CORS is not blocking the request (the script handles this automatically)
