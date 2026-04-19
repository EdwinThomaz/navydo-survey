// Paste this entire file into Google Apps Script
// Extensions → Apps Script → delete everything → paste → Save → Deploy

const NOTIFY_EMAIL = 'edwint.inbox@gmail.com';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Add headers on first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Name', 'Role', 'Palette',
        'Logo Choice', 'Lockup Fav', 'Lockup Ratings',
        'Icon Fav', 'Icon Ratings', 'Comment'
      ]);
      sheet.getRange(1, 1, 1, 10).setFontWeight('bold');
    }

    sheet.appendRow([
      new Date().toISOString(),
      data.name || '',
      data.role || '',
      data.palette || '',
      data.logo_choice || '',
      data.lockup_fav || '',
      JSON.stringify(data.lockup_ratings || {}),
      data.icon_fav || '',
      JSON.stringify(data.icon_ratings || {}),
      data.comment || '',
    ]);

    // Email notification
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: `Navydo Survey — ${data.name || 'Anonymous'} voted ${data.palette || ''}`,
      body: `New survey response:\n\nName: ${data.name}\nRole: ${data.role}\nPalette: ${data.palette}\nLogo: ${data.logo_choice}\nLockup: ${data.lockup_fav}\nIcon: ${data.icon_fav}\nComment: ${data.comment}`,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
