import { useField } from 'formik';
import React from 'react';
import { Form, Label } from 'semantic-ui-react';

interface Props {
    placeholder: string;
    name: string;
    type?: string;
    label?: string;
}

export default function MyTextInput (pros: Props) {
    const [field, meta] = useField(pros.name);

    return (

        <Form.Field error={meta.touched && !!meta.error}>
            <label>{pros.label}</label>
            <input {...field} {...pros} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}
