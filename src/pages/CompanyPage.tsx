import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap,
  TrendingUp,
  Shield,
  DollarSign,
  Search,
  UserCheck,
  CheckCircle2,
  Rocket,
  PenTool,
  Camera,
  Code,
  BarChart,
  MessageSquare,
  FileText,
  Star,
} from 'lucide-react';
import { SEO } from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function CompanyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Funngro',
    url: 'https://funngro.com',
    logo: 'https://funngro.com/logo.png',
    description: 'Platform connecting businesses with talented teenagers for project-based work',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@funngro.com',
      contactType: 'Customer Service',
    },
  };

  return (
    <>
      <SEO
        title="Hire Teenagers for Real Business Work in India | Funngro"
        description="Hire talented teenagers for content creation, social media, research, design, and more. Quality work at affordable rates with parent consent and secure payments."
        keywords="teen internships India, hire teenagers for work, hire young talent, student freelancers India, Gen-Z talent, teen workers"
        canonical="/hire-teens"
        schema={schema}
      />

      <div className="pt-16">
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hire Teenagers for Real Business Work in India
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Access India's brightest Gen-Z talent for content creation, social media management,
                research, design, and more. Quality work at 60% lower costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#post-project"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Post a Project
                </a>
                <Link
                  to="/teen-jobs"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all font-semibold text-lg"
                >
                  Browse Teen Talent
                </Link>
              </div>
              <p className="mt-6 text-gray-600 text-sm">
                ✓ Parent-verified profiles ✓ Secure escrow payments ✓ 7-day money-back guarantee
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Hire Teens Through Funngro?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get fresh perspectives, digital-native skills, and authentic Gen-Z insights for your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: 'Cost-Effective',
                  description: 'Save up to 60% on project costs while supporting young talent development',
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Digital Natives',
                  description: 'Teens bring natural fluency in social media, trends, and digital platforms',
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: 'Fresh Perspectives',
                  description: 'Get authentic Gen-Z insights that resonate with younger audiences',
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Safe & Verified',
                  description: 'Parent consent required, background checks, and secure payment escrow',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-blue-600 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From posting your project to getting quality work delivered in 4 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <FileText className="w-10 h-10" />,
                  step: '1',
                  title: 'Post Your Project',
                  description: 'Describe your project, set budget, and timeline. Takes just 5 minutes.',
                },
                {
                  icon: <Search className="w-10 h-10" />,
                  step: '2',
                  title: 'Get Matched',
                  description: 'Our algorithm matches you with qualified teens based on skills and experience.',
                },
                {
                  icon: <UserCheck className="w-10 h-10" />,
                  step: '3',
                  title: 'Review & Approve',
                  description: 'Review teen profiles, portfolios, and parent-verified credentials.',
                },
                {
                  icon: <CheckCircle2 className="w-10 h-10" />,
                  step: '4',
                  title: 'Work & Pay Securely',
                  description: 'Funds held in escrow. Release payment only when satisfied with delivery.',
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
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="text-blue-600 mb-4 mt-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Popular Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Businesses across India are hiring teens for these high-impact projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <PenTool className="w-8 h-8" />,
                  title: 'Content Creation',
                  description: 'Blog posts, articles, copywriting, and social media content that speaks to Gen-Z',
                  examples: 'Instagram captions, blog articles, product descriptions',
                },
                {
                  icon: <MessageSquare className="w-8 h-8" />,
                  title: 'Social Media Management',
                  description: 'Authentic social media presence managed by digital natives',
                  examples: 'Post scheduling, community engagement, trend monitoring',
                },
                {
                  icon: <BarChart className="w-8 h-8" />,
                  title: 'Market Research',
                  description: 'Youth consumer insights, competitor analysis, and trend research',
                  examples: 'Surveys, data collection, competitor analysis',
                },
                {
                  icon: <Camera className="w-8 h-8" />,
                  title: 'Graphic Design',
                  description: 'Modern designs, social media graphics, and brand assets',
                  examples: 'Instagram posts, thumbnails, presentations',
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: 'Video Editing',
                  description: 'Short-form videos, reels, YouTube content optimized for engagement',
                  examples: 'Reels, YouTube shorts, promotional videos',
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: 'Data Entry & Admin',
                  description: 'Accurate data processing, spreadsheet work, and admin support',
                  examples: 'Excel work, data organization, email management',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-200 p-8 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="text-blue-600 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  <p className="text-sm text-gray-500 italic">{item.examples}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trust & Safety First
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We ensure every interaction on Funngro is safe, secure, and productive
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Parent Consent Required',
                  description: 'Every teen profile is verified with parent consent and contact information',
                },
                {
                  title: 'Secure Escrow Payments',
                  description: 'Your money is safe. Funds released only when you approve the work',
                },
                {
                  title: 'Dispute Resolution',
                  description: '7-day money-back guarantee with dedicated support team for any issues',
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
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Companies Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real feedback from businesses hiring teens through Funngro
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Priya Sharma',
                  role: 'Marketing Head, Urban Retail Co.',
                  content:
                    'We hired a 17-year-old for Instagram content and our engagement tripled. She understood our Gen-Z audience better than our agency did.',
                  rating: 5,
                },
                {
                  name: 'Rahul Mehta',
                  role: 'Founder, EduTech Startup',
                  content:
                    'Funngro helped us get market research from 50+ teens across India in just 2 weeks. Invaluable insights at a fraction of traditional research costs.',
                  rating: 5,
                },
                {
                  name: 'Anjali Desai',
                  role: 'Content Manager, Lifestyle Brand',
                  content:
                    'The quality of work exceeded our expectations. Plus, knowing we are helping teens build real-world skills makes it even more rewarding.',
                  rating: 5,
                },
              ].map((testimonial, index) => (
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
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="post-project" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Hire Young Talent?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join 500+ companies already working with India's brightest teens. Post your first project in 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg"
                >
                  Post Your First Project
                </a>
                <Link
                  to="/teen-jobs"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg"
                >
                  Explore Teen Profiles
                </Link>
              </div>
              <p className="mt-6 text-blue-100 text-sm">
                No upfront payment required • Cancel anytime • 7-day money-back guarantee
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
