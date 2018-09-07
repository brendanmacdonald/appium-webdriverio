const clp = require('../page.objects/contact.list.page');
const acp = require('../page.objects/add.contact.page');

describe('Contact Manager app tests', () => {
    it('Add a new contact with valid data', () => {

        // Add a new contact.
        browser.click(clp.addContactBtn);
        browser.setValue(acp.contactNameEditText, "Jo Bloggs");
        browser.setValue(acp.contactPhoneEditText, "0131 254785");
        browser.setValue(acp.contactEmailEditText, "jo.bloggs@gmail.com");
        browser.element(acp.contactEmailDropdown).click();
        browser.waitForVisible(acp.contactEmailOptionWork);
        browser.element(acp.contactEmailOptionWork).click();
        browser.element(acp.saveBtn).click();

        // Show/Hide invisible contacts.
        browser.waitForVisible(clp.showInvisibleBox)
        browser.click(clp.showInvisibleBox);
        browser.click(clp.showInvisibleBox);

        // Assert contact added to Contact List.
        browser.element(clp.firstEntryInContactList).getText().should.contain("Jo Bloggs");
    });
});