import { Button } from "./Button"

export function Chatbox() {
    return (
        <div style={{
            position: "fixed", bottom: 0, right: 0, width: "200px",
            height: "200px",
            backgroundColor: "red"
        }}>I am the chat box
            <Button />
        </div>
    )
}