
describe('My First Test', () => {
    it('verify tital-postive', () => {
      //cy.title().should('eq','Login ')
      cy.visit ("https://ddr5.test.mintifi.com/#/login")
      
      // Click on login
      cy.get('button[class="text-center m-0 p-0 btn btn-link btn-block"]').click();

      // Enter the email id or passsword
      cy.get('input[name="email"]').type('super_admin@mintifi.com');
      cy.get('input[name="password"]').type('Mintifi@123');

      // Click on submit button
      cy.get('button[class="px-4 disableButton1 btn btn-primary"]').click();
      
      // click on invoic tab
      cy.get('a[class= "c-sidebar-nav-dropdown-toggle"]').eq(8).click();

     // click on Add repayment 
      cy.get('a[href="#/incoming_payment/add"]').click();
    // Enter the loan application number
      cy.get('input[placeholder="Search keyword"]').type(66037);
      // Click on Search button
      cy.get('button[class="disableButton1 btn btn-primary btn-sm"]').click();
      
      //Enter the repayment details
      cy.get('input[name="utr"]').type('2020525252');
    //   cy.get('input[name="Payment date"]').type('2024-02-27');
      cy.get('input[name="amount"]').type('2000');
      cy.get('input[name="payment_mode"]').type('CA');
      cy.get('input[name="coll_ac_no"]').type('656252522552');
      cy.get('input[name="coll_bank"]').type('SBI');
      cy.get('input[name="coll_bank_ifsc"]').type('SBIN0031545');
      cy.get('input[name="re_name"]').type('DHARM');
      cy.get('input[name="re_acc_no"]').type('84848480020');
      cy.get('input[name="re_acc_type"]').type('CA');
      cy.get('input[name="re_bank"]').type('SBI');
      cy.get('input[name="re_bank_ifsc"]').type('SBIN0031575');
      cy.get('input[name="re_remark"]').type('DHARMA');
      cy.get('input[name="veefin_od_account_number"]').type('949949944');
      cy.get('input[name="set_amount"]').type('2000');
      cy.get('input[name="comm"]').type('12');
      cy.get('input[name="gst"]').type('12');
      cy.get('button[class="disableButton2 btn btn-primary btn-sm"]').click();
    })
  })  
