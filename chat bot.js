let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContaine = document.getElementById("chatContainer");
chatContaine.classList.add("msg-to-chatbot-container");
let btn = document.getElementById("sendMsgBtn");
let a = 0;
btn.onclick = function() {
    let su = document.createElement("div");
    let p = document.createElement("span");
    p.classList.add("msg-to-chatbot");
    let user = document.getElementById("userInput").value;
    p.textContent = user;
    chatContaine.appendChild(su);
    su.appendChild(p);
    let sd = document.createElement("div");
    sd.classList.add("text-left");
    let pa = document.createElement("span");
    pa.classList.add("msg-from-chatbot", "msg-from-chatbot-container", "text-left");
    pa.textContent = chatbotMsgList[a];
    chatContaine.appendChild(sd);
    sd.appendChild(pa);
    a += 1;
    user;
}