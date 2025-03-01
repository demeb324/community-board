import React from "react";
import Card from "./card";

const Board = (props) => {
    const cards = [
        {
            title: "React",
            description: "A JavaScript library for building user interfaces.",
            link: "https://reactjs.org/",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        },
        {
            title: "Node.js",
            description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
            link: "https://nodejs.org/",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
        },
        {
            title: "Express",
            description: "A fast, unopinionated, minimalist web framework for Node.js.",
            link: "https://expressjs.com/",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
        },
        {
            title: "Vue.js",
            description: "The Progressive JavaScript Framework.",
            link: "https://vuejs.org/",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        },
        {
            title: "Angular",
            description: "One framework. Mobile & desktop.",
            link: "https://angular.io/",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
        },
        {
            title: "Svelte",
            description: "Cybernetically enhanced web apps.",
            link: "https://svelte.dev/",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
        },
        {
            title: "Django",
            description: "The web framework for perfectionists with deadlines.",
            link: "https://www.djangoproject.com/",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
        },
        {
            title: "Flask",
            description: "A lightweight WSGI web application framework in Python.",
            link: "https://flask.palletsprojects.com/",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg"
        },
        {
            title: "Ruby on Rails",
            description: "A server-side web application framework written in Ruby.",
            link: "https://rubyonrails.org/",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg"
        },
        {
            title: "Laravel",
            description: "The PHP Framework for Web Artisans.",
            link: "https://laravel.com/",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
        },
        {
            title: "Spring",
            description: "Provides a comprehensive programming and configuration model for modern Java-based enterprise applications.",
            link: "https://spring.io/",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
        },
        {
            title: "ASP.NET",
            description: "An open-source, server-side web-application framework designed for web development to produce dynamic web pages.",
            link: "https://dotnet.microsoft.com/apps/aspnet",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ASP.NET_logo.png"
        }
    ];

    return (
        <div className="board">
            <div className="board-title">
                <h2>{props.title}</h2>
            </div>
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} link={card.link} image={card.image} />
                ))}
            </div>
        </div>
    );
};

export default Board;