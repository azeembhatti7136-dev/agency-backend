import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsBenefitsItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_benefits_items';
  info: {
    displayName: 'benefits-items';
  };
  attributes: {
    description: Schema.Attribute.String;
    iconName: Schema.Attribute.String;
    priority: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface ElementsBrandItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_brand_items';
  info: {
    displayName: 'brand-item';
  };
  attributes: {
    brand_name: Schema.Attribute.String;
    logo_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ElementsCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_elements_call_to_actions';
  info: {
    displayName: 'Call to Action';
  };
  attributes: {
    cta_button_link: Schema.Attribute.String;
    cta_button_text: Schema.Attribute.String;
    cta_description: Schema.Attribute.String;
    cta_features: Schema.Attribute.JSON;
  };
}

export interface ElementsComparisonFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_comparison_features';
  info: {
    displayName: 'comparison feature';
  };
  attributes: {
    basic_value: Schema.Attribute.String;
    display_order: Schema.Attribute.Integer;
    enterprise_value: Schema.Attribute.String;
    feature_name: Schema.Attribute.String;
    icon_name: Schema.Attribute.String;
    pro_value: Schema.Attribute.String;
  };
}

export interface ElementsConfiguration extends Struct.ComponentSchema {
  collectionName: 'components_elements_configurations';
  info: {
    displayName: 'Configuration';
  };
  attributes: {
    auto_rotate_interval: Schema.Attribute.String;
    enable_auto_rotate: Schema.Attribute.Boolean;
    show_cta: Schema.Attribute.Boolean;
    show_progress_bar: Schema.Attribute.Boolean;
    show_stats: Schema.Attribute.Boolean;
    timeline_colors: Schema.Attribute.JSON;
  };
}

export interface ElementsFaq extends Struct.ComponentSchema {
  collectionName: 'components_elements_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    category: Schema.Attribute.Enumeration<['pricing', 'general', 'support']>;
    display_order: Schema.Attribute.Integer;
    question: Schema.Attribute.String;
  };
}

export interface ElementsFaqsItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_faqs_items';
  info: {
    displayName: 'faqs-items';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ElementsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    included: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
  };
}

export interface ElementsFeaturesComponent extends Struct.ComponentSchema {
  collectionName: 'components_elements_features_components';
  info: {
    displayName: 'Features Component';
  };
  attributes: {
    bg_color: Schema.Attribute.String;
    color: Schema.Attribute.String;
    icon_name: Schema.Attribute.String;
    text: Schema.Attribute.String;
    text_color: Schema.Attribute.String;
  };
}

export interface ElementsHeaderSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_header_sections';
  info: {
    displayName: 'Header Section';
  };
  attributes: {
    header_badge: Schema.Attribute.String;
    header_description: Schema.Attribute.String;
    header_title: Schema.Attribute.String;
  };
}

export interface ElementsIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'Search',
        'FileText',
        'Lightbulb',
        'Palette',
        'Code',
        'TestTube',
        'Server',
        'BarChart',
        'Target',
        'Users',
        'Shield',
        'Award',
        'TrendingUp',
        'Calendar',
        'Clock',
        'Rocket',
        'CheckCircle',
        'Zap',
        'Globe',
        'Cpu',
        'Layers',
      ]
    >;
  };
}

export interface ElementsMembersItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_members_items';
  info: {
    displayName: 'members-items';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    department: Schema.Attribute.String;
    designation: Schema.Attribute.String;
    experience: Schema.Attribute.String;
    joinDate: Schema.Attribute.String;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    projects: Schema.Attribute.Integer;
    rating: Schema.Attribute.Decimal;
    shortBio: Schema.Attribute.Text;
    skills: Schema.Attribute.Component<'elements.skills', true>;
    socialLinks: Schema.Attribute.JSON;
  };
}

export interface ElementsPaymentMethods extends Struct.ComponentSchema {
  collectionName: 'components_elements_payment_methods';
  info: {
    displayName: 'payment methods';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    method_name: Schema.Attribute.String;
  };
}

export interface ElementsPlansItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_plans_items';
  info: {
    displayName: 'plans-items';
  };
  attributes: {
    cta_button_text: Schema.Attribute.String;
    display_order: Schema.Attribute.Integer;
    features: Schema.Attribute.Component<'elements.features', true>;
    is_popular: Schema.Attribute.Boolean;
    plan_name: Schema.Attribute.String;
    price: Schema.Attribute.String;
    trial_available: Schema.Attribute.Boolean;
  };
}

export interface ElementsProjectsItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_projects_items';
  info: {
    displayName: 'projects-items';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      ['Web', 'Mobile App', 'Design', 'Branding', 'Ecommerce']
    >;
    client: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Blocks;
    featured: Schema.Attribute.Boolean;
    github_link: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    link: Schema.Attribute.String;
    live_demo: Schema.Attribute.String;
    project_name: Schema.Attribute.String;
    project_status: Schema.Attribute.Enumeration<
      ['completed', 'in-progress', 'upcoming']
    >;
    tags: Schema.Attribute.JSON;
    technologies: Schema.Attribute.JSON;
  };
}

export interface ElementsReviewsItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_reviews_items';
  info: {
    displayName: 'reviews-items';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    client_name: Schema.Attribute.String;
    feedback: Schema.Attribute.Text;
    rating: Schema.Attribute.Decimal;
  };
}

export interface ElementsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_cards';
  info: {
    displayName: 'service-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'elements.service-feature-item', true>;
    gradient_end_color: Schema.Attribute.String;
    gradient_start_color: Schema.Attribute.String;
    icon_type: Schema.Attribute.Enumeration<
      [
        'rocket',
        'code',
        'palette',
        'bar-chart',
        'users',
        'shield',
        'zap',
        'globe',
        'target',
        'trending-up',
      ]
    >;
    learn_more_button_text: Schema.Attribute.String;
    learn_more_content: Schema.Attribute.Blocks;
    service: Schema.Attribute.Enumeration<
      [
        'web_development',
        'mobile_apps',
        'ui_ux_design',
        'digital_marketing',
        'consulting',
        'cybersecurity',
        'cloud_services',
        'ecommerce_solutions',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface ElementsServiceFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_feature_items';
  info: {
    displayName: 'service-feature-item';
  };
  attributes: {
    feature_text: Schema.Attribute.String;
  };
}

export interface ElementsSkills extends Struct.ComponentSchema {
  collectionName: 'components_elements_skills';
  info: {
    displayName: ' skills';
  };
  attributes: {
    skills: Schema.Attribute.String;
  };
}

export interface ElementsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'social_links';
  };
  attributes: {
    platform_name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_stat_items';
  info: {
    displayName: 'stat-item';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface ElementsStats extends Struct.ComponentSchema {
  collectionName: 'components_elements_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ElementsStatsComponen extends Struct.ComponentSchema {
  collectionName: 'components_elements_stats_componens';
  info: {
    displayName: 'Stats Component';
  };
  attributes: {
    bg: Schema.Attribute.String;
    color: Schema.Attribute.String;
    icon_name: Schema.Attribute.String;
    label: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ElementsStepsItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_steps_items';
  info: {
    displayName: 'steps-items';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.String;
    icon: Schema.Attribute.Component<'elements.icon', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    is_active: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    milestones: Schema.Attribute.JSON;
    order: Schema.Attribute.String;
    step_number: Schema.Attribute.Integer;
    tags: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    week: Schema.Attribute.String;
  };
}

export interface ElementsTimelinePage extends Struct.ComponentSchema {
  collectionName: 'components_elements_timeline_pages';
  info: {
    displayName: 'Timeline Page';
  };
  attributes: {};
}

export interface SectionsAboutAgency extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_agencies';
  info: {
    displayName: 'About Agency';
  };
  attributes: {
    badge_text: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    experience_years: Schema.Attribute.Integer;
    Features: Schema.Attribute.Component<'elements.features-component', true>;
    heading: Schema.Attribute.String;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    show_features: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    show_stats: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    side_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    stats: Schema.Attribute.Component<'elements.stats-componen', true>;
    tagline: Schema.Attribute.String;
  };
}

export interface SectionsClientLogos extends Struct.ComponentSchema {
  collectionName: 'components_sections_client_logos';
  info: {
    displayName: 'Client Logos';
  };
  attributes: {
    heading: Schema.Attribute.String;
    logos: Schema.Attribute.Component<'elements.brand-item', true>;
  };
}

export interface SectionsCoreServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_core_services';
  info: {
    displayName: 'Core Services';
  };
  attributes: {
    badge_text: Schema.Attribute.String;
    cta_button_text: Schema.Attribute.String;
    cta_description: Schema.Attribute.Text;
    cta_text: Schema.Attribute.String;
    section_subtitle: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
    service_items: Schema.Attribute.Component<'elements.service-card', true>;
  };
}

export interface SectionsCtaBannerCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_banner_call_to_action_s';
  info: {
    displayName: 'CTA Banner (Call to Action)';
  };
  attributes: {
    background_color: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faqs-items', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    badge: Schema.Attribute.String;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_new_tab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_new_tab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    secondary_cta_text: Schema.Attribute.String;
    show_scroll_indicator: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsNewsletterAndContactInfo
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_newsletter_and_contact_infos';
  info: {
    displayName: 'Newsletter & Contact Info';
  };
  attributes: {
    email: Schema.Attribute.String;
    footer_text: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    social_links: Schema.Attribute.Component<'elements.social-links', true>;
  };
}

export interface SectionsPortfolioShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_portfolio_showcases';
  info: {
    displayName: 'Portfolio Showcase';
  };
  attributes: {
    projects: Schema.Attribute.Component<'elements.projects-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPricingPlans extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_plans';
  info: {
    displayName: 'Pricing Plans';
  };
  attributes: {
    cta_description: Schema.Attribute.Text;
    cta_title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    faq: Schema.Attribute.Component<'elements.faq', true>;
    money_back_days: Schema.Attribute.Integer;
    payment: Schema.Attribute.Component<'elements.payment-methods', true>;
    plans: Schema.Attribute.Component<'elements.plans-items', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    trial_days: Schema.Attribute.Integer;
    yearly_discount: Schema.Attribute.Integer;
  };
}

export interface SectionsServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_sections';
  info: {
    displayName: 'services-section';
  };
  attributes: {};
}

export interface SectionsStatisticsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_statistics_sections';
  info: {
    displayName: 'Statistics Section';
  };
  attributes: {
    stats_title: Schema.Attribute.String;
  };
}

export interface SectionsStatsCounter extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats_counters';
  info: {
    displayName: 'Stats Counter';
  };
  attributes: {
    stats: Schema.Attribute.Component<'elements.stat-item', true>;
  };
}

export interface SectionsTeamMembers extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_members';
  info: {
    displayName: 'Team Members';
  };
  attributes: {
    heading: Schema.Attribute.String;
    members: Schema.Attribute.Component<'elements.members-items', true>;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    heading: Schema.Attribute.String;
    reviews: Schema.Attribute.Component<'elements.reviews-items', true>;
  };
}

export interface SectionsVideoIntro extends Struct.ComponentSchema {
  collectionName: 'components_sections_video_intros';
  info: {
    displayName: 'Video Intro';
  };
  attributes: {
    heading: Schema.Attribute.String;
    thumbnail: Schema.Attribute.String;
    video_url: Schema.Attribute.String;
  };
}

export interface SectionsWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_choose_uses';
  info: {
    displayName: 'Why Choose Us';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits: Schema.Attribute.Component<'elements.benefits-items', true>;
    ctaText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean;
    slug: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'elements.stats', true>;
    subHeading: Schema.Attribute.String;
  };
}

export interface SectionsWorkProcess extends Struct.ComponentSchema {
  collectionName: 'components_sections_work_processes';
  info: {
    displayName: 'Work Process';
  };
  attributes: {
    call_to_action: Schema.Attribute.Component<
      'elements.call-to-action',
      false
    >;
    configuration: Schema.Attribute.Component<'elements.configuration', false>;
    header: Schema.Attribute.Component<'elements.header-section', false>;
    slug: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'elements.steps-items', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.benefits-items': ElementsBenefitsItems;
      'elements.brand-item': ElementsBrandItem;
      'elements.call-to-action': ElementsCallToAction;
      'elements.comparison-feature': ElementsComparisonFeature;
      'elements.configuration': ElementsConfiguration;
      'elements.faq': ElementsFaq;
      'elements.faqs-items': ElementsFaqsItems;
      'elements.features': ElementsFeatures;
      'elements.features-component': ElementsFeaturesComponent;
      'elements.header-section': ElementsHeaderSection;
      'elements.icon': ElementsIcon;
      'elements.members-items': ElementsMembersItems;
      'elements.payment-methods': ElementsPaymentMethods;
      'elements.plans-items': ElementsPlansItems;
      'elements.projects-items': ElementsProjectsItems;
      'elements.reviews-items': ElementsReviewsItems;
      'elements.service-card': ElementsServiceCard;
      'elements.service-feature-item': ElementsServiceFeatureItem;
      'elements.skills': ElementsSkills;
      'elements.social-links': ElementsSocialLinks;
      'elements.stat-item': ElementsStatItem;
      'elements.stats': ElementsStats;
      'elements.stats-componen': ElementsStatsComponen;
      'elements.steps-items': ElementsStepsItems;
      'elements.timeline-page': ElementsTimelinePage;
      'sections.about-agency': SectionsAboutAgency;
      'sections.client-logos': SectionsClientLogos;
      'sections.core-services': SectionsCoreServices;
      'sections.cta-banner-call-to-action': SectionsCtaBannerCallToAction;
      'sections.faq': SectionsFaq;
      'sections.hero-section': SectionsHeroSection;
      'sections.newsletter-and-contact-info': SectionsNewsletterAndContactInfo;
      'sections.portfolio-showcase': SectionsPortfolioShowcase;
      'sections.pricing-plans': SectionsPricingPlans;
      'sections.services-section': SectionsServicesSection;
      'sections.statistics-section': SectionsStatisticsSection;
      'sections.stats-counter': SectionsStatsCounter;
      'sections.team-members': SectionsTeamMembers;
      'sections.testimonials': SectionsTestimonials;
      'sections.video-intro': SectionsVideoIntro;
      'sections.why-choose-us': SectionsWhyChooseUs;
      'sections.work-process': SectionsWorkProcess;
    }
  }
}
