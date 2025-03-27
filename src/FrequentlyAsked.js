import React , { useState } from 'react';
import './App.css'
const FrequentlyAsked = () => {
    const faqs = [
      { question: "How long does it take to donate blood?", answer: "The donation process takes about an hour, but the actual blood collection takes 10-15 minutes." },
      { question: "Is blood donation safe?", answer: "Yes, blood donation is safe. All materials are sterile and disposed of after use." },
      { question: "What should I eat before donating?", answer: "Eat a balanced meal with iron-rich foods and drink plenty of water." },
      { question: "What should I do after donating?", answer: "Rest for a few minutes, drink water, and avoid heavy lifting for the day." },
      { question: "How often can I donate blood?", answer: "You can donate blood every 8 to 12 weeks depending on the type of donation and health condition." },
      { question: "Will donating blood make me weak?", answer: "Most donors feel fine, but some might experience slight dizziness. Drinking water and eating well can help." },
      { question: "Can I exercise after donating blood?", answer: "It's best to avoid intense physical activity for 24 hours after donating blood." },
      { question: "Can I donate blood if I have a cold or flu?", answer: "No, you should wait until you fully recover before donating blood." }
    ];
  
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleAnswer = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className='mainfaqdiv'>
        <h1>Frequently Asked Questions</h1>
        <div className="faq-container">
          <div className="faq-column">
            {faqs.slice(0, 4).map((faq, index) => (
              <div key={index} className="faq-item">
                <hr />
                <div className="questionsep" onClick={() => toggleAnswer(index)}>
                  <p>{faq.question}</p>
                  <p className="toggle-btn">{openIndex === index ? "−" : "+"}</p>
                </div>
                {openIndex === index && <p className="showquestion">{faq.answer}</p>}
              </div>
            ))}
            <hr />
          </div>
  
          <div className="faq-column">
            {faqs.slice(4, 8).map((faq, index) => (
              <div key={index + 4} className="faq-item">
                <hr />
                <div className="questionsep" onClick={() => toggleAnswer(index + 4)}>
                  <p>{faq.question}</p>
                  <p className="toggle-btn">{openIndex === index + 4 ? "−" : "+"}</p>
                </div>
                {openIndex === index + 4 && <p className="showquestion">{faq.answer}</p>}
              </div>
            ))}
            <hr />
          </div>
        </div>
      </div>
    );
  };
  
  export default FrequentlyAsked;
  