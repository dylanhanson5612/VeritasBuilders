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
      url: https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=90&fit=crop
      altText: Luxurious modern home exterior with floor-to-ceiling glass and stone facade at dusk
      elementId: ''
      type: ImageBlock
    badge:
      label: New Company
      color: text-primary
      type: Badge
    backgroundImage:
      url: https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80&fit=crop
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 8
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
          altText: Modern luxury home with expansive floor-to-ceiling glass walls and warm interior lighting
          elementId: ''
          url: https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=90&fit=crop
          styles:
            self:
              borderRadius: x-large
      - title: Stone Creek Estate
        subtitle: Potomac, MD
        text: >-
          Situated on 2 acres, this estate features a magnificent stone facade, 
          extensive hardscaping with a custom pool, and sustainable landscaping.
        image:
          url: https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=90&fit=crop
          altText: Elegant stone facade estate with manicured landscaping and modern pool area
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
          url: https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=90&fit=crop
          altText: Modern sustainable home with clean lines and contemporary architecture
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
    backgroundImage:
      url: https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80&fit=crop
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 5
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
      url: https://images.unsplash.com/photo-1600573472591-ee6c563aaec3?w=800&q=90&fit=crop
      type: ImageBlock
      altText: Elegant modern interior with high ceilings and contemporary design
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
    elementId: about
    colors: bg-light-fg-dark
    backgroundImage:
      url: https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80&fit=crop
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 6
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
    backgroundImage:
      url: https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80&fit=crop
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 5
    styles:
      self:
        flexDirection: row
        justifyContent: center
      subtitle:
        textAlign: left
seo:
  metaTitle: Veritas Builders - High End Modern Homes
  metaDescription: Specializing in high end, sustainably built, modern homes in DC, MD and VA.
  socialImage: https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=90&fit=crop
  type: Seo
type: PageLayout
---
