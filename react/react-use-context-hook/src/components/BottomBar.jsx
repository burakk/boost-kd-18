import { Chatbox } from "./ChatBox"

export function BottomBar() {
    return (
        <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%", backgroundColor: "blue" }}>
            I am the bottom bar

            <Chatbox />
        </div>
    )
}