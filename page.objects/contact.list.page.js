class ContactListPage {
  get addContactBtn() {
    return 'android=new UiSelector().resourceId("com.example.android.contactmanager:id/addContactButton")';
  }
  get firstEntryInContactList() {
    return '(//android.widget.TextView[@content-desc=\"false\"])[1]';
  }
  get showInvisibleBox() {
    return 'android=new UiSelector().resourceId("com.example.android.contactmanager:id/showInvisible")';
  }
}

module.exports = new ContactListPage();