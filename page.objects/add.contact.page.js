class AddContactPage {
  get contactNameEditText() {
    return 'android=new UiSelector().resourceId("com.example.android.contactmanager:id/contactNameEditText")';
  }
  get contactPhoneEditText() {
    return 'android=new UiSelector().resourceId("com.example.android.contactmanager:id/contactPhoneEditText")';
  }
  get contactEmailEditText() {
    return 'android=new UiSelector().resourceId("com.example.android.contactmanager:id/contactEmailEditText")';
  }
  get contactEmailDropdown() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.TableLayout/android.widget.TableRow[8]/android.widget.Spinner/android.widget.TextView';
  }
  get contactEmailOptionWork() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.ListView/android.widget.CheckedTextView[2]';
  }
  get saveBtn() {
    return '~Save';
  }
}

module.exports = new AddContactPage();