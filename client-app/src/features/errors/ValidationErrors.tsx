import  React from 'react';
import { Message } from 'semantic-ui-react';

interface Props {
    errors: any;
}
export default function ValidationErrors ({errors}: Props) {
    
    
    return (
        <Message error>
            {errors && (
                <Message.List>
                    {errors.map((eror: any, i: any) =>(
                        <Message.Item key='i'> {eror}</Message.Item>
                    ))}
                </Message.List>
            )}
        </Message>

    )
}