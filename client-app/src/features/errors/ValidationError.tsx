import { Message, MessageList } from "semantic-ui-react"

interface Props {
    errors : string[] | null;
}

export default function ValidationErrors({errors} : Props) {
    return (
        <Message error>
            {errors && (
                <MessageList>
                    {errors.map((err : any, i) => (
                        <Message.Item key = {i}>{err}</Message.Item>
                    ))}
                </MessageList>
            )}
        </Message>
    )
}