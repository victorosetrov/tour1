import react from 'react';
import Header from '../components/Header'
import Sites from  '../components/Sites'

function Home() {
  var authors = [
    {
      author:"Twitter",
      site:"Microblogging Platform",
      direct:<a href="https://twitter.com/">Link</a>
    },
    {
      author:"Gmail",
      site:"Email Service",
      direct:<a href="https://mail.google.com/mail/u/0/#inbox">Link</a>
    },
    {
      author:"Telegram",
      site:"Chat Messaging",
      direct:<a href="https://web.telegram.org/k/">Link</a>
    },
  ]
  return (
    <div>
      <Header header="My favorite websites"/>
      <Sites authors={authors} />
    </div>
  )
}

export default Home;