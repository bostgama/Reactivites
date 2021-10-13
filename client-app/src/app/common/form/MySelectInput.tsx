import { useField } from 'formik';
import React from 'react';
import { Form, Label, Select } from 'semantic-ui-react';

interface Props {
    placeholder: string;
    name: string;
    options: any;
    label?: string;
}

export default function MySelectInput (pros: Props) {
    const [field, meta, helpers] = useField(pros.name);

    return (

        <Form.Field error={meta.touched && !!meta.error}>
            <label>{pros.label}</label>
            <Select
                clearable
                options={pros.options}
                value={field.value || null}
                onChange={(e,d)=> helpers.setValue(d.value)}
                onBlur={()=> helpers.setTouched(true)}
                placeholder={pros.placeholder}

            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}
