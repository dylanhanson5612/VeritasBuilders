---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: High-End, Sustainable, Modern Homes
      color: text-dark
      type: TitleBlock
    subtitle: Serving DC, MD, and VA
    text: >
      Veritas Builders specializes in creating luxury residences over 5000 square feet on minimum 1-acre lots. 
      We focus on beautiful yards, hardscape, expansive glass, solar panels, and stone facades.
    actions:
      - label: Contact Us
        altText: ''
        url: '#contact'
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    media:
      url: /images/main-hero.jpg
      altText: Modern Home
      elementId: ''
      type: ImageBlock
    badge:
      label: New Company
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - type: FeaturedItemsSection
    title:
      text: Our Projects
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Highlights of our recent work
    elementId: projects
    items:
      - type: FeaturedItem
        title: The Glass House
        subtitle: McLean, VA
        text: >-
          A stunning 6000 sq ft modern home featuring floor-to-ceiling glass walls, 
          integrating indoor and outdoor living spaces seamlessly. 
          Includes a full solar array and geothermal heating.
        actions: []
        elementId: null
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            textAlign: left
        image:
          type: ImageBlock
          altText: Glass House Project
          elementId: ''
          url: /images/abstract-feature1.svg
          styles:
            self:
              borderRadius: x-large
      - title: Stone Creek Estate
        subtitle: Potomac, MD
        text: >-
          Situated on 2 acres, this estate features a magnificent stone facade, 
          extensive hardscaping with a custom pool, and sustainable landscaping.
        image:
          url: /images/abstract-feature2.svg
          altText: Stone Creek Estate
          elementId: ''
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: left
            justifyContent: center
        type: FeaturedItem
      - title: Solar Horizon
        subtitle: Great Falls, VA
        text: >-
          A net-zero energy home with a 15kW solar system. Modern design with 
          warm wood accents and a 3-acre beautifully manicured yard.
        image:
          url: /images/abstract-feature3.svg
          altText: Solar Horizon Project
          elementId: ''
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem
    actions: []
    badge:
      label: Portfolio
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pb-16
          - pt-16
          - pl-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      text: Why Choose Veritas?
      color: text-dark
      styles:
        self:
          textAlign: left
      type: TitleBlock
    subtitle: Unmatched Quality & Sustainability
    text: |-
      We are dedicated to building the future of housing. Our homes are not just large (5000+ sq ft) and spacious (1+ acre lots), they are built with the environment in mind. From advanced solar panels to sustainable materials, we ensure your luxury home is eco-friendly.
    actions: []
    media:
      title: Modern Construction
      url: /images/hero2.svg
      type: ImageBlock
      altText: Construction
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
    elementId: about
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: center
      subtitle:
        textAlign: left
  - type: GenericSection
    title:
      text: Get In Touch
      color: text-dark
      styles:
        self:
          textAlign: left
      type: TitleBlock
    subtitle: Start your journey today
    text: |-
      Ready to build your dream home? Contact us to discuss your vision.
      
      Email: contact@veritasbuilders.net
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Tell us about your project
          width: full
          type: TextareaFormControl
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Send Message
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    badge:
      label: Contact
      color: text-primary
      type: Badge
    elementId: contact
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: center
      subtitle:
        textAlign: left
seo:
  metaTitle: Veritas Builders - High End Modern Homes
  metaDescription: Specializing in high end, sustainably built, modern homes in DC, MD and VA.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
