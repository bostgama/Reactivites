import  React from 'react';
import { Message } from 'semantic-ui-react';

interface Props {
    errors: string[] | null;
}
export default function ValidationErrors ({errors}: Props) {
    
    
    return (
        <Message error>
            {errors && (
                <Message.List>
                    {errors.map((eror: any, i) =>(
                        <Message.Item key='i'> {eror}</Message.Item>
                    ))}
                </Message.List>
            )}
        </Message>

    )
}