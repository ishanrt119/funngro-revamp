import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Wallet,
  Clock,
  Award,
  Users,
  TrendingUp,
  ShieldCheck,
  BookOpen,
  Heart,
  Smartphone,
  CheckCircle2,
  PenTool,
  Camera,
  Code,
  BarChart,
  MessageSquare,
  FileText,
  Star,
  ArrowRight,
} from 'lucide-react';
import { SEO } from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function TeenPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can teens really earn money online in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Funngro connects teenagers aged 13-19 with legitimate paid projects from real businesses. All work is parent-approved and paid through secure escrow.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can teens earn on Funngro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Teen earnings vary by project type and skill level. Content writers earn ₹500-2000 per project, designers earn ₹1000-5000, and researchers earn ₹300-1500. Top performers earn ₹15,000-30,000 monthly.',
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Paid Work & Internships for Teens in India | Funngro"
        description="Earn money online as a teenager in India. Get paid for content writing, social media, design, research, and more. Parent-approved with secure payments."
        keywords="paid work for teens, teen jobs India, student micro jobs, online jobs for students, teen internships, earn money as teenager"
        canonical="/teen-jobs"
        schema={schema}
      />

      <div className="pt-16">
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Ages 13-19 • Parent-Approved • Secure Payments
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Paid Work & Internships for Teens in India
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Turn your skills into real income. Work on exciting projects, build your portfolio,
                and earn ₹5,000-30,000 per month while still in school.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#get-started"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Start Working Today
                </a>
                <Link
                  to="/hire-teens"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-all font-semibold text-lg"
                >
                  How It Works
                </Link>
              </div>
              <p className="mt-6 text-gray-600 text-sm">
                ✓ No experience required ✓ Work from home ✓ Flexible hours ✓ Real business projects
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Join Funngro?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                More than just pocket money - build skills, confidence, and a professional portfolio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Wallet className="w-8 h-8" />,
                  title: 'Real Money',
                  description: 'Earn ₹5,000-30,000/month working on projects you enjoy. Get paid to your bank account.',
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: 'Flexible Hours',
                  description: 'Work around your school schedule. Choose projects that fit your availability.',
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: 'Build Your Portfolio',
                  description: 'Real work experience that looks amazing on college applications and resumes.',
                },
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: 'Learn Real Skills',
                  description: 'Master professional tools and skills that schools do not teach.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-green-600 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="work-categories" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Kind of Work Can You Do?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from projects that match your interests and skills
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <PenTool className="w-8 h-8" />,
                  title: 'Content Writing',
                  earnings: '₹500-2,000 per project',
                  description: 'Write blog posts, social media captions, product descriptions',
                  skills: 'Good English, creativity',
                },
                {
                  icon: <MessageSquare className="w-8 h-8" />,
                  title: 'Social Media Management',
                  earnings: '₹3,000-8,000 per month',
                  description: 'Manage Instagram, create posts, engage with followers',
                  skills: 'Social media savvy, consistency',
                },
                {
                  icon: <BarChart className="w-8 h-8" />,
                  title: 'Research & Data',
                  earnings: '₹300-1,500 per project',
                  description: 'Online research, data entry, competitor analysis',
                  skills: 'Attention to detail, Excel basics',
                },
                {
                  icon: <Camera className="w-8 h-8" />,
                  title: 'Graphic Design',
                  earnings: '₹1,000-5,000 per project',
                  description: 'Create social media graphics, thumbnails, posters',
                  skills: 'Canva, Photoshop, creativity',
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: 'Video Editing',
                  earnings: '₹1,500-6,000 per project',
                  description: 'Edit reels, YouTube videos, promotional content',
                  skills: 'Basic editing software',
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: 'Web Development',
                  earnings: '₹3,000-10,000 per project',
                  description: 'Build simple websites, landing pages, fix bugs',
                  skills: 'HTML, CSS, basic coding',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-8 rounded-xl hover:border-green-300 hover:shadow-lg transition-all"
                >
                  <div className="text-green-600 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-green-600 font-semibold text-sm mb-3">{item.earnings}</p>
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  <p className="text-sm text-gray-500">
                    <strong>Skills needed:</strong> {item.skills}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-to-start" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Get Started
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From signup to your first paycheck in 3 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <Users className="w-10 h-10" />,
                  step: '1',
                  title: 'Create Your Profile',
                  description: 'Sign up with parent consent. Add your skills, interests, and what you want to learn. Takes 10 minutes.',
                },
                {
                  icon: <FileText className="w-10 h-10" />,
                  step: '2',
                  title: 'Apply to Projects',
                  description: 'Browse available projects. Apply to ones you like. Companies review your profile and respond.',
                },
                {
                  icon: <CheckCircle2 className="w-10 h-10" />,
                  step: '3',
                  title: 'Complete & Get Paid',
                  description: 'Do the work, submit it for review. Once approved, money is transferred to your account within 24 hours.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="text-green-600 mb-4 mt-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Earnings & Safety
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Transparent payments and complete safety for every teen on Funngro
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 backdrop-blur p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Wallet className="w-6 h-6 mr-3" />
                  How Much Can You Earn?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Beginners:</strong> ₹5,000-10,000/month working 10-15 hours weekly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Intermediate:</strong> ₹15,000-25,000/month with consistent work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Top Performers:</strong> ₹30,000+/month with advanced skills</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white bg-opacity-10 backdrop-blur p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <ShieldCheck className="w-6 h-6 mr-3" />
                  Your Safety Matters
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <span>Parent consent and verification required for all accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <span>All companies verified before posting projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <span>24/7 support team and safe messaging system</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-lg text-green-100 mb-4">
                All payments secured through escrow • Direct bank transfer • No hidden fees
              </p>
            </div>
          </div>
        </section>

        <section id="success-stories" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Teen Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real teens earning real money and building incredible portfolios
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Aarav K.',
                  age: '16, Mumbai',
                  role: 'Content Writer',
                  earnings: '₹18,000/month',
                  content:
                    'Started writing blog posts 6 months ago. Now I have 3 regular clients and earn more than my dad\'s monthly phone bill! Saving for college.',
                  rating: 5,
                },
                {
                  name: 'Diya S.',
                  age: '17, Bangalore',
                  role: 'Social Media Manager',
                  earnings: '₹25,000/month',
                  content:
                    'Managing Instagram for 2 fashion brands. My parents were skeptical at first, but now they are super proud. This pays for my CA coaching!',
                  rating: 5,
                },
                {
                  name: 'Rohan M.',
                  age: '15, Delhi',
                  role: 'Video Editor',
                  content:
                    'I love editing videos for YouTube channels. Made ₹12,000 last month and my portfolio helped me get into a media course. Best decision ever!',
                  earnings: '₹12,000/month',
                  rating: 5,
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="flex mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-green-400 text-green-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{story.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900">{story.name}</p>
                    <p className="text-sm text-gray-600">{story.age} • {story.role}</p>
                    <p className="text-green-600 font-semibold text-sm mt-2">{story.earnings}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes Funngro Special?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: 'Built for Teens',
                  description: 'Not a generic freelance platform. Every feature designed specifically for teenage workers.',
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: 'Skill Development',
                  description: 'Free courses, mentorship, and feedback to help you grow professionally.',
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Teen Community',
                  description: 'Connect with other teen workers, share tips, and grow together.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-600">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="get-started" className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Earning?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Join 5,000+ teens already earning real money while building skills for the future.
                No credit card required. Start today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg inline-flex items-center"
                >
                  Create Free Profile
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <Link
                  to="/hire-teens"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all font-semibold text-lg"
                >
                  Learn More
                </Link>
              </div>
              <p className="mt-6 text-green-100 text-sm">
                100% free to join • No hidden fees • Parent consent required • Safe & secure
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
