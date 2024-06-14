import React from 'react';
import { useParams } from 'react-router-dom';
import Header from 'Components/Molecules/navBars/header';
import Footer from 'Components/Molecules/footer/footer';
import './BlogDetailsPage.css';
import BlogBlocks from '../../Molecules/cards/blogCards/blogBlocks'

const blogs = [
  {
    id: 1,
    title: "Save Blood",
    image: "http://localhost:8000/media/blog_images/BlogImage_krFYDVR.jpeg",
    description: "Blood donation offers numerous benefits for both the donor and the recipient. For the donor, the act of giving blood can provide a sense of fulfillment and community involvement, knowing they are potentially saving lives. Regular blood donation has been linked to various health benefits for the donor, including improved cardiovascular health and reduced risk of certain cancers. It also provides an opportunity for donors to receive a mini health check, as blood pressure, hemoglobin levels, and general health are assessed before donation.\r\n\r\nFor recipients, blood donation is often a critical, life-saving intervention. It supports patients undergoing surgeries, trauma care, cancer treatment, and managing chronic conditions like anemia. In emergencies, donated blood can be the difference between life and death. Furthermore, blood donation helps maintain a stable blood supply, ensuring that hospitals and clinics have the necessary resources to respond promptly to patients' needs.\r\n\r\nThe broader community also benefits as blood donation fosters a spirit of altruism and solidarity. It raises awareness about health and encourages a culture of giving. Regular donors contribute to a reliable blood supply, enhancing public health resilience. In summary, blood donation is a simple, safe, and altruistic act that provides significant health benefits and saves countless lives."
  },
  {
    "id": 2,
    "title": "The Life-Saving Benefits of Blood Donation",
    "image": "http://localhost:8000/media/blog_images/BlogImage2_wrwdD66.jpg",
    "description": "Blood donation is a noble and selfless act that has far-reaching benefits for both the donor and recipients. For donors, giving blood not only provides a profound sense of fulfillment and community involvement but also offers tangible health benefits. Regular blood donation has been associated with improved cardiovascular health, reduced cancer risk, and a mini health checkup with each donation session. Donors get their blood pressure, hemoglobin levels, and overall health assessed, ensuring they stay informed about their health status.\r\n\r\nOn the other hand, for recipients, blood donation is often a critical, life-saving intervention. It is essential for patients undergoing surgeries, trauma care, cancer treatments, and managing chronic conditions like anemia. In emergencies, a timely blood transfusion can mean the difference between life and death. Furthermore, maintaining a stable blood supply ensures that hospitals and clinics can promptly respond to patients' needs, providing crucial support during medical crises.\r\n\r\nBeyond the immediate medical benefits, blood donation fosters a spirit of altruism and solidarity within the broader community. It raises awareness about health issues and encourages a culture of giving. Regular donors contribute to a reliable blood supply, enhancing public health resilience and preparedness for emergencies. In essence, blood donation is a simple, safe, and altruistic act that not only provides significant health benefits but also saves countless lives, creating a healthier and more connected community."
},
{
    "id": 3,
    "title": "Harnessing the Power of Mindfulness for Mental Health",
    "image": "http://localhost:8000/media/blog_images/BlogImage3_2Kz98qJ.jpg",
    "description": "In today's fast-paced world, finding moments of calm and clarity can be challenging. This is where mindfulness comes into play, offering a simple yet powerful tool to enhance mental health and well-being. Mindfulness, the practice of being present and fully engaged in the current moment, has been shown to reduce stress, anxiety, and depression. It encourages individuals to observe their thoughts and feelings without judgment, fostering a greater sense of self-awareness and acceptance.\r\n\r\nRegular mindfulness practice can lead to improved emotional regulation, helping individuals respond to life's challenges with a calm and focused mindset. It has been linked to increased levels of compassion and empathy, both towards oneself and others. Moreover, mindfulness can improve concentration and cognitive flexibility, making it easier to navigate complex tasks and decisions.\r\n\r\nIncorporating mindfulness into daily routines can be as simple as dedicating a few minutes each day to meditation, deep breathing exercises, or mindful walking. These practices can help break the cycle of negative thinking and bring about a profound sense of peace and balance. Mindfulness is not about eliminating stress but about changing one's relationship with it, allowing for a more resilient and adaptable approach to life's inevitable ups and downs.\r\n\r\nUltimately, mindfulness empowers individuals to live more fully in the present moment, enhancing overall mental health and contributing to a more fulfilling and balanced life. Whether through formal meditation or informal mindfulness practices, the benefits are accessible to everyone, offering a valuable resource for improving mental health and well-being in our increasingly busy lives."
}
];

const BlogDetailsPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <Header id="header" />
      <section className="blog-details">
        <div className="blog-details-content">
          <h1>{blog.title}</h1>
          <div className='blog-details-contents-img'>
            <img src={blog.image} alt={blog.title} />
            <hr className='horizontalLine'></hr>
          </div>
          <div className="blog-details-description">
            <p>{blog.description}</p>
          </div>
        </div>
      </section>
      
      <section className="blogs sectionPadding">
      <hr className='horizontalLine'></hr>
        <div className="container">
            <div className="row">
            <h2 className='sectionHead'>WHAT TO READ NEXT</h2>
            </div>
            <div className="row sectionDisc">

            </div>
            <div className="row blogBlockContainer d-flex justify-content-center">
                {
                    blogs.slice(-4).map((blog) => (
                        <BlogBlocks img={blog.image} title={blog.title} key={blog.id} />
                    ))
                }
                
            </div>
        </div>
    </section>
      <Footer color="var(--c-theme2)"/>
    </>
  );
};

export default BlogDetailsPage;
