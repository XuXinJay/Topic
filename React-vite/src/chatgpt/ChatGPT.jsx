import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "./chatgpt.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "Your key";

const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a Customer Service Specialist of Social Platforms with 10 years of experience.",
};

function ChatGpt() {
  const [messages, setMessages] = useState([
    {
      message: "你好，我是智能客服，請問需要什麼幫助嗎?",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
      sentTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);



    // Check for specific questions and provide responses
    if (message.includes("開始使用")) {
      const responseMessage = {
        message: "您好，可以先點選頁面右上角按鈕的[登入/註冊]進行創建，再點選指南了解網站的操作哦！",
        sentTime: "just now",
        sender: "ChatGPT",
      };
      setTimeout(() => {
        setMessages([...newMessages, responseMessage]);
        setIsTyping(false);
      }, 3000);
      return;
    } else if (message.includes("找不到朋友")) {
      const responseMessage = {
        message: "很抱歉讓你有這樣的感受，提供您一些關於交友技巧的介紹，可能會有幫助: https://www.youtube.com/watch?v=3srXy_3hDi8",
        sentTime: "just now",
        sender: "ChatGPT",
      };
      setTimeout(() => {
        setMessages([...newMessages, responseMessage]);
        setIsTyping(false);
      }, 3000);
      return;
    } else if (message.includes("頁面錯誤")) {
      const responseMessage = {
        message: "很抱歉造成您不好的感受，已將資訊提交給工程師，將盡快為您解決問題，給您更完善的用戶體驗",
        sentTime: "just now",
        sender: "ChatGPT",
      };
      setTimeout(() => {
        setMessages([...newMessages, responseMessage]);
        setIsTyping(false);
      }, 3000);
      return;
    }


        // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    
    await processMessageToChatGPT(newMessages);

    
  };

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <main className="main">
      <div className="gpt_container">
        <div className="content">
          <div className="text-content">
            <div className="home text chatgpt">
              <div className="title">ChatGPT客服</div>
              <div className="message">
                <MainContainer>
                  <ChatContainer>
                    <MessageList
                      scrollBehavior="smooth"
                      typingIndicator={
                        isTyping ? (
                          <TypingIndicator content="客服回應中" />
                        ) : null
                      }
                    >
                      {messages.map((message, i) => {
                        console.log(message);
                        return <Message key={i} model={message} />;
                      })}
                    </MessageList>
                    <MessageInput
                      placeholder="請輸入問題"
                      onSend={handleSend}
                    />
                  </ChatContainer>
                </MainContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChatGpt;
