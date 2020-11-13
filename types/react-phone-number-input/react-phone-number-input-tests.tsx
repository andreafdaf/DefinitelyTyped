import * as React from 'react';
import PhoneInput, { parsePhoneNumber, PhoneNumber } from 'react-phone-number-input';

const phoneNumber: PhoneNumber | undefined = parsePhoneNumber('+12025550112');

const test1 = (
    <PhoneInput
        value={'+64271231234'}
        onChange={(value: string) => {
            console.log(value);
        }}
        displayInitialValueAsLocalNumber={false}
        disabled={false}
        autoComplete="tel"
        defaultCountry="NZ"
        countries={['NZ', 'US', 'FR']}
        placeholder="Place holder"
        international={true}
        withCountryCallingCode={true}
        country={'US'}
        countrySelectProps={{ tabIndex: '-1' }}
    >
        <div>panel 1</div>
        <div>panel 2</div>
        <div>panel 3</div>
    </PhoneInput>
);

const InputComponent = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
    <input ref={ref} {...props} />
));

const test2 = (
    <PhoneInput
        value={'+64271231234'}
        onChange={(value: string) => {
            console.log(value);
        }}
        addInternationalOption
        countryOptionsOrder={['US', 'CA', 'AU', '|', '...']}
        disabled
        inputComponent={InputComponent}
        numberInputProps={{ type: 'tel' }}
        smartCaret={false}
    />
);
