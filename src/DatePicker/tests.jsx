/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/
/* eslint-disable no-magic-numbers, no-multi-str, no-unused-expressions, max-len */

import React        from 'react';
import { mount }    from 'enzyme';


import DatePicker   from './index';

describe( 'DatePicker', () =>
{
    let wrapper;

    beforeEach( () =>
    {
        wrapper = mount( <DatePicker /> );
    } );

    it( 'should have its component name and hash as default className', () =>
    {
        expect( wrapper.find( '.datePicker__default' ) ).to.have.length( 1 );
    } );
} );


describe( 'DatePickerDriver', () =>
{
    let wrapper;
    let driver;

    beforeEach( () =>
    {
        wrapper = mount( <DatePicker /> );
        driver = wrapper.driver();
    } );


    describe( 'clickItem', () =>
    {
        it( 'should simulate and trigger onClickItem()', () =>
        {
            const onClickItem = sinon.spy();
            wrapper.setProps( {
                onClickItem,
                label   : 'January 2000',
                headers : [
                    { label: 'Mon', title: 'Monday' },
                    { label: 'Tue', title: 'Tuesday' },
                    { label: 'Wed', title: 'Wednesday' },
                    { label: 'Thu', title: 'Thursday' },
                    { label: 'Fri', title: 'Friday' },
                    { label: 'Sat', title: 'Saturday' },
                    { label: 'Sun', title: 'Sunday' }
                ],
                items : [
                    [
                        { label: '01', value: '1', isCurrent: false, isSelected: false },
                        { label: '02', value: '2', isCurrent: false, isSelected: false },
                        { label: '03', value: '3', isCurrent: false, isSelected: false },
                        { label: '04', value: '4', isCurrent: false, isSelected: false },
                        { label: '05', value: '5', isCurrent: true, isSelected: true },
                        { label: '06', value: '6', isCurrent: false, isSelected: false },
                        { label: '07', value: '7', isCurrent: false, isSelected: false }
                    ],
                    [
                        { label: '08', value: '8', isCurrent: false, isSelected: false },
                        { label: '09', value: '9', isCurrent: false, isSelected: false },
                        { label: '10', value: '10', isCurrent: false, isSelected: false },
                        { label: '11', value: '11', isCurrent: false, isSelected: false },
                        { label: '12', value: '12', isCurrent: false, isSelected: false },
                        { label: '13', value: '13', isCurrent: false, isSelected: false },
                        { label: '14', value: '14', isCurrent: false, isSelected: false }
                    ]
                ]
            } );

            driver.clickItem();

            expect( onClickItem.calledOnce ).to.be.true;
        } );
    } );

    describe( 'clickNext', () =>
    {
        it( 'should simulate and trigger onClickNext()', () =>
        {
            const onClickNext = sinon.spy();
            wrapper.setProps( {
                onClickNext
            } );

            driver.clickNext();

            expect( onClickNext.calledOnce ).to.be.true;
        } );
    } );

    describe( 'clickPrev', () =>
    {
        it( 'should simulate and trigger onClickPrev()', () =>
        {
            const onClickPrev = sinon.spy();
            wrapper.setProps( {
                onClickPrev
            } );

            driver.clickPrev();

            expect( onClickPrev.calledOnce ).to.be.true;
        } );
    } );
} );
