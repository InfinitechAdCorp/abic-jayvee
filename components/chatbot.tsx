"use client";

import React from "react";
import ChatBot from "react-chatbotify";

const Chatbot = () => {
  const helpOptions = ["Vision & Mission", "Core Values", "Properties"];
  const propertiesOptions = ["For Sale", "RFO", "Under Construction"];

  const flow = {
    start: {
      message: "Welcome to Abic Realty! How can I assist you today?",
      transition: { duration: 1000 },
      path: "show_options",
    },
    show_options: {
      message: "What would you like to know about?",
      options: helpOptions,
      path: "process_options",
    },
    prompt_again: {
      message: "Do you need any other help?",
      options: helpOptions,
      path: "process_options",
    },
    unknown_input: {
      message: "Sorry, I did not understand your message!",
      options: helpOptions,
      path: "process_options",
    },

    end: {
      message: "Do you need any other help?",
      options: helpOptions,
      path: "process_options",
    },

    process_options: {
      transition: { duration: 0 },
      chatDisabled: true,
      path: async (params: any) => {
        switch (params.userInput) {
          case "Vision & Mission":
            return "vision_mission";
          case "Core Values":
            return "values";
          case "Properties":
            return "properties";
          default:
            return "unknown_input";
        }
      },
    },
    vision_mission: {
      message:
        "Vision & Mission\n\n" +
        "We consistently strive to develop collaborative partnerships, based on transparency and mutual trust, which serve to build enduring client relationships. As we expand, we remain committed to these principles, which have served our company and clients through the years.",
      path: "repeat",
    },

    values: {
      message:
        "Our Core Values\n\n" +
        "Innovation\n" +
        "Innovation is essential for real estate agents to stay ahead of current market trends and remain competitive.\n\n" +
        "Customer Focus\n" +
        "Customer focus ensures that agents are attentive to clients’ needs and provide them with the best service possible.\n\n" +
        "Collaboration\n" +
        "Collaboration between agents and other real estate professionals is necessary for the success of any real estate company.\n\n" +
        "Respect\n" +
        "Highly valued by all clients: it is important to treat everyone with respect regardless of their background or status.\n\n",
      path: "repeat",
    },
    properties: {
      message: "List of Properties",
      options: propertiesOptions,
      path: "repeat",
    },
    repeat: {
      transition: { duration: 3000 },
      path: "prompt_again",
    },
  };

  return (
    <ChatBot
      flow={flow}
      settings={{
        general: {
          primaryColor: "#ff5757",
          secondaryColor: "#8c52ff",
          showFooter: false,
        },
        header: {
          title: "ABIC REALTY",
          avatar: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-logo.png",
        },
        botBubble: {
          showAvatar: true, // Enable the avatar display
          avatar: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-logo.png",
        },
        chatButton: {
          icon: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-logo.png",
        },

        tooltip: {
          mode: "NEVER",
        },
      }}
    />
  );
};

export default Chatbot;
