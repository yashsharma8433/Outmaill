'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/component/ui/badge';
import { MinusIcon, PlusIcon } from 'lucide-react';

const faqItems = [
  {
    id: '1',
    question: 'What is OutMail?',
    answer:
      'OutMail is your AI-powered job application assistant. It helps students automatically apply to multiple job listings using tailored resumes and cover letters.',
    category: 'general',
  },
  {
    id: '2',
    question: 'How does OutMail work?',
    answer:
      'You connect your resume and job preferences, and OutMail uses AI to apply on your behalf by matching you with relevant job listings and generating custom applications.',
    category: 'general',
  },
  {
    id: '3',
    question: 'Do I need to manually upload my resume every time?',
    answer:
      'No, once you upload your resume and set your preferences, OutMail uses that information for all future applications unless you update it.',
    category: 'technical',
  },
  {
    id: '4',
    question: 'Can I customize my cover letter?',
    answer:
      'Yes! OutMail provides AI-generated cover letters, but you can edit and customize them before they are sent out.',
    category: 'technical',
  },
  {
    id: '5',
    question: 'Is OutMail free to use?',
    answer:
      'OutMail offers a free tier with limited applications per month. For unlimited access and advanced AI features, you can upgrade to a premium plan.',
    category: 'pricing',
  },
  {
    id: '6',
    question: 'Will I get notifications about applied jobs?',
    answer:
      'Yes, OutMail sends email and dashboard notifications for each job it applies to, including tracking and response status (if available).',
    category: 'support',
  },
  {
    id: '7',
    question: 'Can I pause or stop the AI from applying?',
    answer:
      'Absolutely. You have full control — you can pause, resume, or stop applications at any time from your dashboard.',
    category: 'technical',
  },
  {
    id: '8',
    question: 'Is my data safe with OutMail?',
    answer:
      'Yes, your data is encrypted and stored securely. We never share your resume or details without your permission.',
    category: 'support',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'technical', label: 'Technical' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'support', label: 'Support' },
];

export default function Faq2() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-white text-black  font-syne py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center">
          <Badge
            variant="outline"
            className="border-primary mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase"
          >
            FAQs
          </Badge>

          <h2 className="mb-6 text-center text-4xl font-bold tracking-tight md:text-5xl ">
            Frequently Asked Questions
          </h2>

          <p className="max-w-2xl text-center text-gray-600">
            Learn how OutMail helps students streamline their job applications using AI.
          </p>
        </div>

       {/* Category Tabs */}
<div className="mb-10 flex flex-wrap justify-center gap-2">
  {categories.map((category) => (
    <button
      key={category.id}
      onClick={() => setActiveCategory(category.id)}
      className={cn(
        'rounded-full px-4 py-2 text-sm font-medium transition-colors',
        activeCategory === category.id
          ? 'bg-purple-600 text-white'
          : 'bg-gray-200 text-black hover:bg-gray-300'
      )}
    >
      {category.label}
    </button>
  ))}
</div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  'border border-gray-200 bg-white shadow-md h-fit overflow-hidden rounded-xl',
                  expandedId === faq.id ? 'shadow-lg' : ''
                )}
                style={{ minHeight: '88px' }}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <div className="ml-4 flex-shrink-0">
                    {expandedId === faq.id ? (
                      <MinusIcon className="text-primary h-5 w-5" />
                    ) : (
                      <PlusIcon className="text-primary h-5 w-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-200 px-6 pt-2 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-gray-600">Can’t find what you’re looking for?</p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary bg-transparent px-6 py-3 font-medium text-black hover:black transition-colors hover:bg-primary hover:text-black hover:bg-purple-400"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
