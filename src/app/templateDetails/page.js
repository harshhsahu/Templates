'use client'
import React, { useState } from 'react';
import { Play, Download, Copy, Star, Clock, Users, ChevronRight, CheckCircle, AlertCircle, Settings, Database, Send, Filter, ArrowRight, Code, Eye, Heart, Share2, Bookmark, Globe, Mail, MessageSquare, Calendar, FileText, Zap, BarChart, Shield, Cpu, Webhook, GitBranch, Bot } from 'lucide-react';




// Icon mapping for dynamic icon selection
const iconMap = {
  database: Database,
  send: Send,
  filter: Filter,
  eye: Eye,
  checkCircle: CheckCircle,
  alertCircle: AlertCircle,
  settings: Settings,
  globe: Globe,
  mail: Mail,
  messageSquare: MessageSquare,
  calendar: Calendar,
  fileText: FileText,
  zap: Zap,
  barChart: BarChart,
  shield: Shield,
  cpu: Cpu,
  webhook: Webhook,
  gitBranch: GitBranch,
  code: Code,
  clock: Clock,
  users: Users,
  bot:Bot
};
export const runtime = 'edge';  

export const TemplateDetailsPage = ({ templateData }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Default template data if none provided
  const defaultTemplate = {
    id: 'sample-template',
    name: 'Sample Workflow Template',
    description: 'A sample template to demonstrate the component functionality.',
    category: 'General',
    author: 'Template Author',
    downloads: 1000,
    rating: 4.5,
    lastUpdated: '2024-12-01',
    difficulty: 'Beginner',
    estimatedTime: '10 minutes',
    tags: ['Sample', 'Demo'],
    workflow: {
      nodes: 3,
      triggers: 1,
      actions: 2
    },
    icon: 'zap',
    steps: [
      {
        id: 1,
        title: 'Sample Trigger',
        description: 'This is a sample trigger step',
        icon: 'webhook',
        type: 'trigger',
        details: 'Sample trigger details'
      }
    ],
    features: [
      {
        title: 'Sample Feature',
        description: 'This is a sample feature',
        icon: 'checkCircle'
      }
    ],
    useCases: [
      'Sample use case 1',
      'Sample use case 2'
    ],
    integrations: [
      { name: 'Sample Service', logo: '🔧', type: 'API' }
    ],
    prerequisites: [
      'Sample prerequisite 1',
      'Sample prerequisite 2'
    ],
    setupSteps: [
      {
        step: 1,
        title: 'Sample Setup Step',
        description: 'Description of the setup step'
      }
    ],
    reviews: [
      {
        rating: 5,
        author: 'Sample User',
        role: 'Developer',
        comment: 'Great template!'
      }
    ]
  };

  const template = templateData || defaultTemplate;

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 font-medium text-sm rounded-lg transition-all duration-200 ${isActive
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
        }`}
    >
      {label}
    </button>
  );

  const IconComponent = ({ iconName, className = "w-5 h-5" }) => {
    const Icon = iconMap[iconName] || Zap;
    return <Icon className={className} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <IconComponent iconName={template.icon} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{template.name}</h1>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-gray-500">by {template.author}</span>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{template.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Use Template</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="flex space-x-2 mb-6 p-1 bg-gray-100 rounded-lg">
              <TabButton id="overview" label="Overview" isActive={activeTab === 'overview'} onClick={setActiveTab} />
              <TabButton id="workflow" label="Workflow" isActive={activeTab === 'workflow'} onClick={setActiveTab} />
              <TabButton id="setup" label="Setup Guide" isActive={activeTab === 'setup'} onClick={setActiveTab} />
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {activeTab === 'overview' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">What this template does</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {template.description}
                  </p>

                  {template.features && template.features.length > 0 && (
                    <>
                      <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {template.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent iconName={feature.icon} className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{feature.title}</h4>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {template.useCases && template.useCases.length > 0 && (
                    <>
                      <h3 className="text-lg font-semibold mb-4">Use Cases</h3>
                      <ul className="space-y-2 text-gray-600">
                        {template.useCases.map((useCase, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'workflow' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Workflow Steps</h2>
                  <p className="text-gray-600 mb-6">
                    This workflow consists of {template.steps?.length || 0} main steps that work together to create a complete automation.
                  </p>

                  {template.steps && template.steps.length > 0 && (
                    <div className="space-y-4">
                      {template.steps.map((step, index) => (
                        <div key={step.id} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.type === 'trigger'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-blue-100 text-blue-600'
                              }`}>
                              <IconComponent iconName={step.icon} />
                            </div>
                            {index < template.steps.length - 1 && (
                              <div className="w-px h-8 bg-gray-200 mt-2"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium text-gray-900">{step.title}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${step.type === 'trigger'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-blue-100 text-blue-700'
                                }`}>
                                {step.type}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                            {step.details && (
                              <p className="text-xs text-gray-500">{step.details}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'setup' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Setup Guide</h2>
                  <p className="text-gray-600 mb-6">
                    Follow these steps to configure and deploy this template in your GTWY instance.
                  </p>

                  <div className="space-y-6">
                    {template.prerequisites && template.prerequisites.length > 0 && (
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Prerequisites</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {template.prerequisites.map((prereq, index) => (
                            <li key={index}>• {prereq}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {template.setupSteps && template.setupSteps.length > 0 && (
                      <div className="space-y-4">
                        {template.setupSteps.map((setupStep, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                              {setupStep.step}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{setupStep.title}</h4>
                              <p className="text-sm text-gray-600">{setupStep.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Template Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Template Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Category</span>
                  <span className="text-sm font-medium text-gray-900">{template.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Updated</span>
                  <span className="text-sm font-medium text-gray-900">{template.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            {template.tags && template.tags.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Compatible Integrations */}
            {template.integrations && template.integrations.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Compatible Integrations</h3>
                <div className="grid grid-cols-2 gap-3">
                  {template.integrations.map((integration, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-lg">{integration.logo}</span>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{integration.name}</div>
                        <div className="text-xs text-gray-500">{integration.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage with sample data
const ExampleUsage = () => {
  const sampleTemplateData = {
    id: 'email-automation-crm',
    name: 'Email Marketing Automation with CRM Integration',
    description: 'Automatically sync contacts from your CRM, send personalized email campaigns, and track engagement metrics to optimize your marketing efforts.',
    category: 'Marketing',
    author: 'GTWY Team',
    downloads: 12450,
    rating: 4.8,
    lastUpdated: '2024-12-15',
    tags: ['Email Marketing', 'CRM', 'Automation', 'Analytics'],
    icon: 'send',
    workflow: {
      nodes: 8,
      triggers: 2,
      actions: 6
    },
    steps: [
      {
        id: 1,
        title: 'Create New Agent',
        description: 'Create a new AI agent and select the agent type',
        icon: 'bot',
        type: '1',
        details: 'Choose between different agent types like chatbot, assistant, or classifier based on your needs'
      },
      {
        id: 2,
        title: 'Configure Base Prompt',
        description: 'Set up the core prompt and behavior',
        icon: 'messageSquare',
        type: '2',
        details: 'Define the primary instructions and personality for your AI agent'
      },
      {
        id: 3,
        title: 'Configure Advanced Parameters',
        description: 'Fine-tune model parameters and settings',
        icon: 'settings',
        type: '3',
        details: 'Adjust temperature, top-p, frequency penalty and other advanced settings'
      },
      {
        id: 4,
        title: 'Configure Function Calling',
        description: 'Set up tools and function calling capabilities',
        icon: 'code',
        type: '4',
        details: 'Add and configure tools to enable function calling and external integrations'
      },
      {
        id: 5,
        title: 'Add Knowledge Base',
        description: 'Upload relevant documents and data',
        icon: 'database',
        type: '5',
        details: 'Import documents, FAQs, and other knowledge sources to enhance agent capabilities'
      },
      {
        id: 6,
        title: 'Test Agent',
        description: 'Validate agent behavior and responses',
        icon: 'checkCircle',
        type: '6',
        details: 'Test different scenarios and fine-tune the agent based on results'
      },
      {
        id: 7,
        title: 'Publish Agent',
        description: 'Deploy agent to production',
        icon: 'send',
        type: '7',
        details: 'Make your agent live and available for use in your applications'
      }
    ],
    features: [
      {
        title: 'Automatic CRM Sync',
        description: 'Real-time contact synchronization from multiple CRM platforms',
        icon: 'checkCircle'
      },
      {
        title: 'Smart Segmentation',
        description: 'Automatically categorize contacts for targeted campaigns',
        icon: 'filter'
      },
      {
        title: 'Personalized Emails',
        description: 'Dynamic content based on contact data and preferences',
        icon: 'send'
      },
      {
        title: 'Analytics Tracking',
        description: 'Comprehensive engagement metrics and reporting',
        icon: 'eye'
      }
    ],
    useCases: [
      'Lead nurturing campaigns for new prospects',
      'Customer onboarding email sequences',
      'Product announcement campaigns',
      'Re-engagement campaigns for inactive contacts'
    ],
    integrations: [
      { name: 'Salesforce', logo: '🏢', type: 'CRM' },
      { name: 'HubSpot', logo: '🧡', type: 'CRM' },
      { name: 'Mailchimp', logo: '🐵', type: 'Email' },
      { name: 'SendGrid', logo: '📧', type: 'Email' },
      { name: 'Slack', logo: '💬', type: 'Notifications' },
      { name: 'Google Sheets', logo: '📊', type: 'Data' }
    ],
    // prerequisites: [
    //   'Active  instance (cloud or self-hosted)',
    //   'CRM system credentials (Salesforce, HubSpot, etc.)',
    //   'Email service provider API keys',
    //   'Basic understanding of workflow concepts'
    // ],
    setupSteps: [
      {
        step: 1,
        title: 'Import Template',
        description: 'Click "Use Template" and import into your GTWY workspace'
      },
      {
        step: 2,
        title: 'Configure Credentials',
        description: 'Set up API credentials for your CRM and email service'
      },
      {
        step: 3,
        title: 'Customize Settings',
        description: 'Adjust segmentation rules and email templates'
      },
      {
        step: 4,
        title: 'Test & Deploy',
        description: 'Run a test execution and activate the workflow'
      }
    ]
  };

  return <TemplateDetailsPage templateData={sampleTemplateData} />;
};

export default ExampleUsage;