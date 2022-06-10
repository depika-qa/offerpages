describe('Rs.1188 offer page ', () => {
    //Before login price check 

    it.only('Before login price check', () => {
        cy.visit("https://www.magzter.com/magztergold/1year-renewal-offer")
        cy.viewport(1245, 645)
        cy.get('.cookies__btn').click()

        cy.get('button').
            contains('CLAIM NOW').click()

        cy.url().
            should('contain', 'https://payment.magzter.com/checkout/goldprocess_new_v2', { timeout: 7000 })
        cy.get('h5').
            should('contain', '1 Year Magzter GOLD Subscription', 'be.visible')
        cy.get('.bigText').
            should('contain', 'You will be charged', 'be.visible')
        cy.get('.mg-price').
            should('contain', '₹1,188.00', 'be.visible')
        cy.get('.col-sm-4 > :nth-child(4)').
            should('contain', 'Note: You can cancel the auto-renewal at any time during the subscription period.', 'be.visible')


        const dayjs = require('dayjs')
        var advancedFormat = require('dayjs/plugin/advancedFormat')
        dayjs.extend(advancedFormat)
        var utc = require('dayjs/plugin/utc')
        dayjs.extend(utc)
        var timezone = require('dayjs/plugin/timezone')
        dayjs.extend(timezone)
        const userTimeZone = dayjs.tz.guess()
        cy.log(userTimeZone)

        const reqdateletter = dayjs().utcOffset(-330).format('Do')
        const lastchar = reqdateletter.substr(reqdateletter.length - 2)

        //1 year  plan
        const nd = dayjs().utcOffset(-330).add(1, 'y').format('MMM DD')
        const ny1 = dayjs().utcOffset(-330).add(1, 'y').format('YYYY')
        const oneyear = nd + lastchar + ', ' + ny1



        cy.get('.mg-info')
            .should('contain', `After 1 Year, we will automatically renew your subscription at ₹1,188.00 on ${oneyear}.`)
            .should('be.visible')


        cy.get('#tab-int-credit-card').should('contain', 'Credit Card').should('be.visible')
        cy.get('#tab-int-ccavenue-dbt').should('contain', 'Debit Card').should('be.visible')
        cy.get('#tab-int-ccavenue-nb').should('contain', 'Net Banking').should('be.visible')
        cy.get('#tab-int-ccavenue-wlt').should('contain', 'Wallet').should('be.visible')
        cy.get('#tab-int-ccavenue-upi').should('contain', 'UPI').should('be.visible')
        cy.get('#tab-int-ccavenue-layz').should('contain', 'LazyPay').should('be.visible')
        cy.get('.btn').should('contain', 'Pay Now').should('be.visible')
        cy.get('.bluecolor').should('contain', 'Terms & Conditions').should('be.visible')
        cy.get('.bluecolor').eq(2).invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('be.equal', 'https://www.magzter.com/terms-and-conditions')
        cy.go('back')
        cy.get('#coupCode').should('be.visible')
        cy.get('#coupCodeSub').should('contain', 'Apply', 'be.visible')

    })
})



it('Homepage check', () => {


    cy.visit("https://www.magzter.com/magztergold/1year-renewal-offer")
    cy.viewport(1245, 645)
    cy.get('.cookies__btn').click()

    //Header         
    cy.get('[alt="menuIcon"]').should('be.visible')
    cy.get('[alt="Magzter Logo"]').should('be.visible')
    cy.get('.first__menu').should('contain', 'Home').should('be.visible')
    cy.get().should('contain', 'Magazines').should('be.visible')
    cy.get('.header__menu__list').should('contain', 'Stories').should('be.visible')
    cy.get('.header__menu__list').should('contain', 'Newspapers').should('be.visible')
    cy.get('.last__menu').should('contain', 'Coupons').should('be.visible')
    cy.get('[alt="searchIcon"]').should('be.visible')
    cy.get('[alt="cartIcon"]').should('be.visible')
    cy.get('.header__country__icon').should('be.visible')
    cy.get('.header__country__name').should('contain', 'IN', 'be.visible')
    cy.get('[alt="userIcon"]').should('be.visible')


    //Banner
    cy.get('.mbanner__cn').should('be.visible')
    cy.get('.mbanner__cn__logo').should('be.visible')
    cy.get('.mbanner__cn__title').should('contain', `Indulge in unlimited reading at a price you'll love`).should('be.visible')
    cy.get('.mbanner__cn__subtitle__text').should('contain', 'Read 7,500+ magazines and newspapers', 'Access curated premium stories').should('be.visible')
    cy.get('.mbanner__cn__priceinfo__offer').should('contain', '₹99/Month').and('be.visible')
    cy.get('.sidetext').should('contain', '(Charged annually at Rs 1,188)').and('be.visible')
    cy.get('.mbanner__cn > button').should('contain', 'CLAIM NOW').should('be.visible')

    //Home   
    cy.get('.horiz__span').eq(0).should('contain', 'POPULAR ON MAGZTER').should('be.visible')
    cy.get('.horizontlSlider__viewall').eq(0).should('contain', 'View All', 'be.visible')
    cy.get('.horizontalSlider__scrollleft').eq(0).should('be.visible')
    cy.get('.horizontalSlider__scrollright').eq(0).should('be.visible')

    cy.get('.ic__cn__title').invoke('text').then((n) => {
        cy.get('.ic__cn__title').should('have.length', 180)
        cy.get('.ic__cn__title').should('contain.text', n).and('be.visible', n)

        // let array = []
        // cy.get('.ic__cn__title').each(($option, index )=> {
        //     array.push(Cypress.$($option).text())
        //            cy.get('.ic__cn__title').should('contain.text', array[index]).and('be.visible', array[index])



        cy.get('.horiz__span').eq(1).should('contain', 'NEWSPAPERS').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(1).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(1).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(1).should('be.visible')

        cy.get('.horiz__span').eq(2).should('contain', 'ENTERTAINMENT').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(2).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(2).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(2).should('be.visible')

        cy.get('.horiz__span').eq(3).should('contain', 'BUSINESS').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(3).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(3).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(3).should('be.visible')

        cy.get('.horiz__span').eq(4).should('contain', 'LIFESTYLE').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(4).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(4).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(4).should('be.visible')

        cy.get('.horiz__span').eq(5).should('contain', 'NEWS').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(5).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(5).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(5).should('be.visible')

        cy.get('.horiz__span').eq(6).should('contain', 'HOME').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(6).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(6).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(6).should('be.visible')


        cy.get('.horiz__span').eq(7).should('contain', 'AUTOMOTIVE').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(7).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(7).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(7).should('be.visible')


        cy.get('.horiz__span').eq(8).should('contain', 'HEALTH').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(8).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(8).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(8).should('be.visible')



        cy.get('.horiz__span').eq(9).should('contain', 'CHILDREN').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(9).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(9).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(9).should('be.visible')

        cy.get('.horiz__span').eq(10).should('contain', 'TRAVEL').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(10).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(10).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(10).should('be.visible')

        cy.get('.horiz__span').eq(11).should('contain', 'TRENDING STORIES').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(11).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(11).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(11).should('be.visible')

        cy.get('.horiz__span').eq(12).should('contain', 'POPULAR CATEGORIES').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(12).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(12).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(12).should('be.visible')


        cy.get('.horiz__span').eq(13).should('contain', 'MAGZTER IN THE PRESS:').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(13).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(13).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(13).should('be.visible')

        //Footer promotion

        cy.get('.footer__promotion__text').should('contain', `Indulge in unlimited reading at a price you'll love`, 'be.visible')
        cy.get('.footer__promotion__ul__li__read').should('contain', 'Read 5,000+ best-selling magazines', 'be.visible')
        cy.get('.footer__promotion__ul__li__access').should('contain', 'Access premium stories and newspapers', 'be.visible')
        cy.get('.footer__promotion__ul__li__download').should('contain', 'Download to read offline', 'be.visible')
        cy.get('.footer__promotion__ul__li__cancel').should('contain', 'Cancel Anytime (No Commitments)', 'be.visible')
        cy.get('.footer__promotion__ul__li__digital').should('contain', 'Digital Only', 'be.visible')
        cy.get('.gold__button__big').should('contain', 'Claim Now', 'be.visible')
        cy.get('.subtitle__inner').should('contain', `By clicking on Claim Now you are agreeing to Magzter's`, 'be.visible')
        cy.get('.subtitle__a').should('contain', 'Terms & Conditions', 'be.visible')
        cy.get(':nth-child(3) > .subtitle').should('contain', 'Already a User? Login Now')
        cy.get('.footer__promotion').scrollIntoView()
        cy.wait(7000)
        cy.get('.footer__promotion__figure').should('be.visible')

        //app download
        cy.get('.mzmagfooterapp__download__info').should('contain', 'Subscribe now and enjoy unlimited reading on iPad, iPhone & Android devices at no extra cost').should('be.visible')
        cy.get('.mzmagfooterapp__download__playstores').should('be.visible')
        cy.get('.mzmagfooterapp__download__appstores').should('be.visible')
        cy.get('.magfooter__maglogo__img').should('be.visible')
        cy.get('[href="https://www.facebook.com/mobilemagzter"]').should('be.visible')
        cy.get('[href="https://twitter.com/MobileMagzter"]').should('be.visible')
        cy.get('[href="https://www.instagram.com/mobilemagzter/"]').should('be.visible')
        cy.get('[href="https://www.pinterest.com/mobilemagzter/"]').should('be.visible')

        //footer          
        cy.get('.magfooter__items__heading').eq(0).should('contain', 'About').should('be.visible')
        cy.get('.magfooter__items__heading').eq(1).should('contain', 'PUBLISHERS').should('be.visible')
        cy.get('.magfooter__items__heading').eq(2).should('contain', 'HELP').should('be.visible')
        cy.get('.magfooter__items__heading').eq(3).should('contain', 'POLICY').should('be.visible')
        cy.get('.magfooter__items__heading').eq(4).should('contain', 'More Information').should('be.visible')
        cy.get('[alt="About Us"]').should('contain', 'About Us', 'be.visible')
        cy.get('[alt="Press"]').should('contain', 'Press', 'be.visible')
        cy.get('[alt="Testimonials"]').should('contain', 'Testimonials', 'be.visible')
        cy.get('[alt="Careers"]').should('be.visible')
        cy.get('[href="https://publishers.magzter.com/login"]').should('be.visible')
        cy.get('[href="https://publishers.magzter.com/publisher-signup"]').should('be.visible')
        cy.get('[alt="Publisher Support"]').should('be.visible')
        cy.get('[alt="Contact Us"]').should('be.visible')
        cy.get('[alt="Site Map"]').should('be.visible')
        cy.get('[alt="Feedback"]').should('be.visible')
        cy.get('[alt="Privacy Policy"]').should('be.visible')
        cy.get('[alt="Terms & Conditions"]').should('be.visible')
        cy.get('[alt="Advertise on Magzter"]').should('be.visible')
        cy.get('[alt="Press - Media Kit"]').should('be.visible')
        cy.get('[alt="Press - Media Kit"]').should('be.visible')
        cy.get('.magfooter__copyrights__info').should('contain', '© 2011 - 2022. All rights reserved. Magzter Inc')
        cy.get('.magfooter__copyrights__countrylang__link').eq(0).should('contain', 'English(UK)').and('be.visible')
        cy.get('.magfooter__copyrights__countrylang__link').eq(1).should('contain', 'Japanese').and('be.visible')
        cy.get('.magfooter__copyrights__countrylang__link').eq(2).should('contain', 'German').and('be.visible')
        cy.get('.magfooter__copyrights__countrylang__link').eq(3).should('contain', 'Spanish').and('be.visible')
        cy.get('.magfooter__copyrights__countrylang__link').eq(4).should('contain', 'Turkish').and('be.visible')
        cy.get('.magfooter__copyrights__cards').should('be.visible')
        cy.get('.magfooter__version').should('be.visible')

    })
})

it('After login as normal user', () => {
    cy.visit("https://www.magzter.com/magztergold/1year-offer")
    cy.viewport(1245, 645)
    cy.get('.cookies__btn').click()

    cy.get('.h__userlogin__icon').click({ timeout: 10000 })
    cy.get('[href="/login/email"]').click({ timeout: 10000 })
    cy.url().should('eq', 'https://www.magzter.com/login/email')
    cy.get('.form__control').type('automatenongld@gmail.com')
    cy.get('button').contains('Continue').click({ timeout: 10000 })
    cy.get('[type="password"]').type('1234')
    cy.get('button').contains('Continue').click({ timeout: 10000 })
    cy.wait(5000)
    cy.url().should('eq', 'https://www.magzter.com/magztergold/1year-renewal-offer', { timeout: 10000 })


    //Banner
    cy.get('.mbanner__cn').should('be.visible')
    cy.get('.mbanner__cn__logo').should('be.visible')
    cy.get('.mbanner__cn__title').should('contain', `Indulge in unlimited reading at a price you'll love`).should('be.visible')
    cy.get('.mbanner__cn__subtitle__text').should('contain', 'Read 7,500+ magazines and newspapers', 'Access curated premium stories').should('be.visible')
    cy.get('.mbanner__cn__priceinfo__offer').should('contain', '₹99/Month').and('be.visible')
    cy.get('.sidetext').should('contain', '(Charged annually at Rs 1,188)').and('be.visible')
    cy.get('.mbanner__cn > button').should('contain', 'CLAIM NOW').should('be.visible')
    
    //Home   
    cy.get('.horiz__span').eq(0).should('contain', 'POPULAR ON MAGZTER').should('be.visible')
    cy.get('.horizontlSlider__viewall').eq(0).should('contain', 'View All', 'be.visible')
    cy.get('.horizontalSlider__scrollleft').eq(0).should('be.visible')
    cy.get('.horizontalSlider__scrollright').eq(0).should('be.visible')

    cy.get('.ic__cn__title').invoke('text').then((n) => {
        cy.get('.ic__cn__title').should('have.length', 180)
        cy.get('.ic__cn__title').should('contain.text', n).and('be.visible', n)

        // let array = []
        // cy.get('.ic__cn__title').each(($option, index )=> {
        //     array.push(Cypress.$($option).text())
        //            cy.get('.ic__cn__title').should('contain.text', array[index]).and('be.visible', array[index])



        cy.get('.horiz__span').eq(1).should('contain', 'NEWSPAPERS').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(1).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(1).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(1).should('be.visible')

        cy.get('.horiz__span').eq(2).should('contain', 'ENTERTAINMENT').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(2).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(2).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(2).should('be.visible')

        cy.get('.horiz__span').eq(3).should('contain', 'BUSINESS').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(3).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(3).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(3).should('be.visible')

        cy.get('.horiz__span').eq(4).should('contain', 'LIFESTYLE').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(4).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(4).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(4).should('be.visible')

        cy.get('.horiz__span').eq(5).should('contain', 'NEWS').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(5).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(5).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(5).should('be.visible')

        cy.get('.horiz__span').eq(6).should('contain', 'HOME').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(6).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(6).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(6).should('be.visible')


        cy.get('.horiz__span').eq(7).should('contain', 'AUTOMOTIVE').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(7).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(7).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(7).should('be.visible')


        cy.get('.horiz__span').eq(8).should('contain', 'HEALTH').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(8).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(8).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(8).should('be.visible')



        cy.get('.horiz__span').eq(9).should('contain', 'CHILDREN').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(9).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(9).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(9).should('be.visible')

        cy.get('.horiz__span').eq(10).should('contain', 'TRAVEL').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(10).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(10).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(10).should('be.visible')

        cy.get('.horiz__span').eq(11).should('contain', 'TRENDING STORIES').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(11).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(11).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(11).should('be.visible')

        cy.get('.horiz__span').eq(12).should('contain', 'POPULAR CATEGORIES').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(12).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(12).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(12).should('be.visible')


        cy.get('.horiz__span').eq(13).should('contain', 'MAGZTER IN THE PRESS:').should('be.visible')
        cy.get('.horizontlSlider__viewall').eq(13).should('be.visible')
        cy.get('.horizontalSlider__scrollleft').eq(13).should('be.visible')
        cy.get('.horizontalSlider__scrollright').eq(13).should('be.visible')

        cy.get('.footer__promotion__text').should('contain', 'Get 1 year  of Magzter GOLD access for just', 'be.visible')
        cy.get('.footer__promotion__offer__strike').should('contain', '₹4,000', 'be.visible')
        cy.get('.footer__promotion__offer__strike__span').should('contain', '₹2,000', 'be.visible')


        cy.get('.footer__promotion__ul__li__read').should('contain', 'Read 5,000+ best-selling magazines', 'be.visible')
        cy.get('.footer__promotion__ul__li__access').should('contain', 'Access premium stories and newspapers', 'be.visible')
        cy.get('.footer__promotion__ul__li__download').should('contain', 'Download to read offline', 'be.visible')
        cy.get('.footer__promotion__ul__li__cancel').should('contain', 'Cancel Anytime (No Commitments)', 'be.visible')
        cy.get('.footer__promotion__ul__li__digital').should('contain', 'Digital Only', 'be.visible')
        cy.get('.gold__button__big').should('contain', 'Claim Now', 'be.visible')
        cy.get('.subtitle__inner').should('contain', `By clicking on Claim Now you are agreeing to Magzter's`, 'be.visible')
        cy.get('.subtitle__a').should('contain', 'Terms & Conditions', 'be.visible')


        cy.get('#promoForm').should('not.contain', 'Already a User? Login Now')
        cy.get('.footer__promotion').scrollIntoView()
        cy.wait(7000)
        cy.get('.footer__promotion__figure').should('be.visible')

        //app download
        cy.get('.mzmagfooterapp__download__info').should('contain', 'Subscribe now and enjoy unlimited reading on iPad, iPhone & Android devices at no extra cost').should('be.visible')
        cy.get('.mzmagfooterapp__download__playstores').should('be.visible')
        cy.get('.mzmagfooterapp__download__appstores').should('be.visible')
        cy.get('.magfooter__maglogo__img').should('be.visible')
        cy.get('[href="https://www.facebook.com/mobilemagzter"]').should('be.visible')
        cy.get('[href="https://twitter.com/MobileMagzter"]').should('be.visible')
        cy.get('[href="https://www.instagram.com/mobilemagzter/"]').should('be.visible')
        cy.get('[href="https://www.pinterest.com/mobilemagzter/"]').should('be.visible')

        //footer          
        cy.get('.magfooter__items__heading').eq(0).should('contain', 'About').should('be.visible')
        cy.get('.magfooter__items__heading').eq(1).should('contain', 'PUBLISHERS').should('be.visible')
        cy.get('.magfooter__items__heading').eq(2).should('contain', 'HELP').should('be.visible')
        cy.get('.magfooter__items__heading').eq(3).should('contain', 'POLICY').should('be.visible')
        cy.get('.magfooter__items__heading').eq(4).should('contain', 'More Information').should('be.visible')
        cy.get('[alt="About Us"]').should('contain', 'About Us', 'be.visible')
        cy.get('[alt="Press"]').should('contain', 'Press', 'be.visible')
        cy.get('[alt="Testimonials"]').should('contain', 'Testimonials', 'be.visible')
        cy.get('[alt="Careers"]').should('be.visible')
        cy.get('[href="https://publishers.magzter.com/login"]').should('be.visible')
        cy.get('[href="https://publishers.magzter.com/publisher-signup"]').should('be.visible')
        cy.get('[alt="Publisher Support"]').should('be.visible')
        cy.get('[alt="Contact Us"]').should('be.visible')
        cy.get('[alt="Site Map"]').should('be.visible')
        cy.get('[alt="Feedback"]').should('be.visible')
        cy.get('[alt="Privacy Policy"]').should('be.visible')
        cy.get('[alt="Terms & Conditions"]').should('be.visible')
        cy.get('[alt="Advertise on Magzter"]').should('be.visible')
        cy.get('[alt="Press - Media Kit"]').should('be.visible')
        cy.get('[alt="Press - Media Kit"]').should('be.visible')
        cy.get('.magfooter__copyrights__info').should('contain', '© 2011 - 2022. All rights reserved. Magzter Inc')
        cy.get('.magfooter__copyrights__countrylang__link').eq(0).should('contain', 'English(UK)').and('be.visible')
        cy.get('.magfooter__copyrights__countrylang__link').eq(1).should('contain', 'Japanese').and('be.visible')
        cy.get('.magfooter__copyrights__countrylang__link').eq(2).should('contain', 'German').and('be.visible')
        cy.get('.magfooter__copyrights__countrylang__link').eq(3).should('contain', 'Spanish').and('be.visible')
        cy.get('.magfooter__copyrights__countrylang__link').eq(4).should('contain', 'Turkish').and('be.visible')
        cy.get('.magfooter__copyrights__cards').should('be.visible')
        cy.get('.magfooter__version').should('be.visible')



        //price verification
        cy.get('button').contains('CLAIM NOW').click()
        cy.wait(4000)
        cy.waitForLatestEmail().then((inboxId) => {
            cy.wait(3000)
            cy.get('#otp1').type(inboxId.subject)

            cy.get('button').contains('Verify').click()
        })
        cy.url().should('contain', 'https://payment.magzter.com/checkout/goldprocess_new_v2', { timeout: 7000 })
        cy.get('h5').should('contain', '1 Year Magzter GOLD Subscription', 'be.visible')
        cy.get('.bigText').should('contain', 'You will be charged', 'be.visible')
        cy.get('[style="text-decoration: line-through;"]').should('contain', '₹4,000.00', 'be.visible')
        cy.get('.mg-price').should('contain', '₹2,000.00', 'be.visible')
        cy.get('.col-sm-4 > :nth-child(4)').should('contain', 'Note: You can cancel the auto-renewal at any time during the subscription period.', 'be.visible')



        const dayjs = require('dayjs')
        var advancedFormat = require('dayjs/plugin/advancedFormat')
        dayjs.extend(advancedFormat)
        var utc = require('dayjs/plugin/utc')
        dayjs.extend(utc)
        var timezone = require('dayjs/plugin/timezone')
        dayjs.extend(timezone)
        const userTimeZone = dayjs.tz.guess()
        cy.log(userTimeZone)

        const reqdateletter1 = dayjs().utcOffset(-330).format('Do')
        const lastchar1 = reqdateletter1.substr(reqdateletter1.length - 2)

        //1 year  plan
        const nd2 = dayjs().utcOffset(-330).add(1, 'y').format('MMM DD')
        const ny2 = dayjs().utcOffset(-330).add(1, 'y').format('YYYY')
        const oneyear1 = nd2 + lastchar1 + ', ' + ny2



        cy.get('.mg-info')
            .should('contain', `After 1 Year, we will automatically renew your subscription at ₹2,000.00 on ${oneyear1}.`)
            .should('be.visible')




    })
})








