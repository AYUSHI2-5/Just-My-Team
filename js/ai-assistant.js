/**
 * JUST MY TEAM — INTELLIGENT PRODUCT ASSISTANT & INQUIRY CONCIERGE
 * 
 * Features:
 * - Transparent standing avatar with natural motion & auto-hide viewport persistence
 * - Verified product knowledge engine for all 8 core platform pillars:
 *   1. Agents Network
 *   2. Agents Tree
 *   3. Properties (Land, Residential, Commercial; Location, Acres, Price, APN, Zoning)
 *   4. Journal (Private deal/property notes)
 *   5. Chat (1-to-1 and group collaboration)
 *   6. Dashboard (Activity overview, network counts & growth insights)
 *   7. Referral System (5-step referral flow)
 *   8. Team Growth (Referral-driven network building)
 * - Navigation assistant for all primary site destinations
 * - Step-by-step lead/inquiry collection with validation & confirmation summary
 * - Strictly verified information with accurate fallback
 */

(function () {
  'use strict';

  // Prevent duplicate initialization
  if (window._jmtAiAssistantInitialized) return;
  window._jmtAiAssistantInitialized = true;

  // 1. VERIFIED PLATFORM KNOWLEDGE BASE
  const KNOWLEDGE_BASE = [
    {
      id: 'overview',
      keywords: ['what is', 'about', 'just my team', 'who are you', 'platform', 'what can i do', 'benefits', 'why should i join', 'why join'],
      reply: '<strong>Just My Team</strong> helps real-estate and land professionals build and manage their professional network. You can grow your referral team, visualize your team structure, manage property opportunities, keep private notes, communicate with agents, and track your network activity from one platform.'
    },
    {
      id: 'referral_system',
      keywords: ['how does the referral system work', 'referral system', 'referral', 'invite link', 'referral code', 'how to invite', 'invite another agent', 'how to refer'],
      reply: '<strong>How the Referral System Works:</strong><br><br>' +
             '1. <strong>Get your JMT referral code</strong> from your dashboard.<br>' +
             '2. <strong>Share your invite link</strong> with another agent.<br>' +
             '3. <strong>The agent joins</strong> through your referral.<br>' +
             '4. <strong>They appear in your team/tree</strong> automatically.<br>' +
             '5. <strong>Collaborate with your network</strong> directly through the platform.'
    },
    {
      id: 'agents_network',
      keywords: ['agents network', 'agent network', 'network', 'downline', 'manage agents', 'connected agents'],
      reply: '<strong>The Agents Network</strong> lets you view and manage your connected agent network and downline. It is designed to help real-estate and land professionals build a reliable, professional referral network and track all connected members across your structure.'
    },
    {
      id: 'agents_tree',
      keywords: ['agents tree', 'agent tree', 'tree', 'hierarchy', 'structure', 'team structure', 'visualize team'],
      reply: '<strong>The Agents Tree</strong> gives you a visual view of your referral/team hierarchy, making it easier to understand how your network is structured and growing over time.'
    },
    {
      id: 'properties',
      keywords: ['properties', 'manage properties', 'property', 'land', 'residential', 'commercial', 'acres', 'apn', 'zoning', 'type of properties', 'information can i store'],
      reply: '<strong>Just My Team</strong> lets you manage and view land and real-estate opportunities. Property categories include <strong>Land</strong>, <strong>Residential</strong>, and <strong>Commercial</strong>. For each property, you can manage key information including <strong>Location</strong>, <strong>Acres</strong>, <strong>Price / price per acre</strong>, <strong>APN</strong> (Assessor Parcel Number), and <strong>Zoning</strong>.'
    },
    {
      id: 'journal',
      keywords: ['journal', 'private notes', 'notes', 'private workspace', 'deal notes', 'property notes'],
      reply: '<strong>The Journal</strong> is your private workspace within Just My Team for keeping confidential notes related to properties, deals, and client opportunities.'
    },
    {
      id: 'chat',
      keywords: ['chat', 'communicate', 'message', 'messages', '1-to-1', 'group', 'create a group', 'collaboration'],
      reply: '<strong>The Chat</strong> feature enables direct collaboration with other agents in your network. It supports direct <strong>1-to-1 messaging</strong> as well as <strong>private/personal groups</strong> for deal coordination and team discussions.'
    },
    {
      id: 'dashboard',
      keywords: ['dashboard', 'overview', 'counts', 'growth insights', 'activity', 'insights'],
      reply: '<strong>The Dashboard</strong> provides a centralized overview of your network activity, team member counts, property opportunities, and growth-related insights across the platform.'
    },
    {
      id: 'team_growth',
      keywords: ['team growth', 'grow my team', 'growth', 'expand team', 'recruit'],
      reply: '<strong>Just My Team</strong> is designed specifically for referral-driven growth, enabling real-estate and land professionals to build, organize, and collaborate with their professional team in one unified environment.'
    }
  ];

  // 2. INTERACTIVE GUIDED TOUR TOPICS
  const GUIDED_TOUR = {
    main: {
      title: '👋 Welcome to Just My Team',
      text: 'I am your intelligent product concierge. Just My Team is the dedicated platform for real-estate and land professionals to build referral teams, visualize network hierarchies, manage property opportunities, and collaborate privately.<br><br>How can I assist you today?',
      options: [
        { label: '👥 Agents Network & Tree', target: 'network_tree' },
        { label: '🏡 Property Management & Types', target: 'properties' },
        { label: '🔄 How the Referral System Works', target: 'referral' },
        { label: '📝 Private Journal & Team Chat', target: 'tools' },
        { label: '📊 Dashboard & Growth Insights', target: 'dashboard' },
        { label: '📩 Submit an Inquiry in Chat', action: 'inquiry', primary: true },
        { label: '🚀 Register Free with JMT-FOUNDER', url: 'register.html?referral_code=JMT-FOUNDER' }
      ]
    },

    network_tree: {
      title: '👥 Agents Network & Visual Tree',
      text: '• <strong>Agents Network</strong>: View and manage your entire connected agent downline and build a professional referral team.<br>' +
            '• <strong>Agents Tree</strong>: A clear visual representation of your referral hierarchy, showing exactly how your team is structured and expanding.',
      options: [
        { label: '🔄 How does the referral process work?', target: 'referral' },
        { label: '📊 Dashboard & team insights', target: 'dashboard' },
        { label: '📩 Submit an Inquiry in Chat', action: 'inquiry', primary: true },
        { label: '🧭 Main Menu', target: 'main' }
      ]
    },

    properties: {
      title: '🏡 Real Estate & Land Opportunities',
      text: 'Manage and review property opportunities directly on Just My Team:<br><br>' +
            '• <strong>Categories</strong>: Land, Residential, Commercial.<br>' +
            '• <strong>Tracked Data</strong>: Location, Total Acres, Price / Price per Acre, APN (Assessor Parcel Number), and Zoning details.',
      options: [
        { label: '📝 Learn about the Private Journal', target: 'tools' },
        { label: '🌲 Browse Properties Page', url: 'properties.html' },
        { label: '📩 Submit an Inquiry in Chat', action: 'inquiry', primary: true },
        { label: '🧭 Main Menu', target: 'main' }
      ]
    },

    referral: {
      title: '🔄 Referral System & Team Growth',
      text: 'Building your professional team follows a simple 5-step flow:<br><br>' +
            '1. <strong>Get your JMT referral code</strong> from your account.<br>' +
            '2. <strong>Share your invite link</strong> with real estate or land colleagues.<br>' +
            '3. <strong>The new agent joins</strong> through your referral link.<br>' +
            '4. <strong>They appear in your team & tree</strong> instantly.<br>' +
            '5. <strong>Collaborate on deals</strong> seamlessly via platform chat.',
      options: [
        { label: '👥 See Agents Network & Tree', target: 'network_tree' },
        { label: '🚀 Join Free (Code: JMT-FOUNDER)', url: 'register.html?referral_code=JMT-FOUNDER', primary: true },
        { label: '📩 Submit an Inquiry in Chat', action: 'inquiry' },
        { label: '🧭 Main Menu', target: 'main' }
      ]
    },

    tools: {
      title: '📝 Private Journal & Agent Chat',
      text: '• <strong>Journal</strong>: Your confidential deal workspace for maintaining private notes related to properties, pricing, and client requirements.<br><br>' +
            '• <strong>Chat</strong>: Built-in communication featuring 1-to-1 messaging and private groups to coordinate opportunities with your network.',
      options: [
        { label: '🏡 Property Management Details', target: 'properties' },
        { label: '👥 Agents Network & Tree', target: 'network_tree' },
        { label: '📩 Submit an Inquiry in Chat', action: 'inquiry', primary: true },
        { label: '🧭 Main Menu', target: 'main' }
      ]
    },

    dashboard: {
      title: '📊 Central Dashboard & Growth Insights',
      text: 'The Just My Team Dashboard gives you a complete operational overview:<br><br>' +
            '• Real-time network and downline member counts.<br>' +
            '• Team growth activity and historical milestones.<br>' +
            '• Centralized access to properties, private notes, and team conversations.',
      options: [
        { label: '🔄 Referral System Flow', target: 'referral' },
        { label: '🚀 Register Account Now', url: 'register.html?referral_code=JMT-FOUNDER', primary: true },
        { label: '📩 Submit an Inquiry in Chat', action: 'inquiry' },
        { label: '🧭 Main Menu', target: 'main' }
      ]
    }
  };

  // Helper to safely escape user inputs
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Helper to construct HTML elements
  function createAssistantDOM() {
    // 1. Floating Standing Avatar Container
    const avatarWrap = document.createElement('aside');
    avatarWrap.className = 'jmt-floating-avatar-wrap';
    avatarWrap.id = 'jmt-floating-avatar-wrap';
    avatarWrap.setAttribute('aria-label', 'Just My Team AI Concierge');

    avatarWrap.innerHTML = `
      <div class="jmt-avatar-prompt-bubble" id="jmt-avatar-prompt" role="button" tabindex="0" title="How can I help you?">
        <span class="jmt-prompt-dot"></span>
        <span>👋 How can I help you?</span>
      </div>
      <button class="jmt-avatar-stand-btn" id="jmt-avatar-stand-btn" type="button" aria-label="How can I help you?" title="How can I help you?">
        <img class="jmt-avatar-stand-img" src="assets/front/floating-avatar.png?v=6" alt="Just My Team AI Concierge" loading="eager" />
      </button>
    `;

    // 2. Chat / Inquiry Panel
    const chatPanel = document.createElement('div');
    chatPanel.className = 'jmt-chat-panel';
    chatPanel.id = 'jmt-chat-panel';
    chatPanel.setAttribute('role', 'dialog');
    chatPanel.setAttribute('aria-label', 'Just My Team AI Concierge & Inquiry Panel');

    chatPanel.innerHTML = `
      <div class="jmt-chat-header">
        <div class="jmt-chat-header-info">
          <div class="jmt-chat-avatar-wrap">
            <img src="assets/front/chat-assistant-avatar.png?v=6" alt="JMT AI Avatar" />
            <span class="jmt-chat-status-dot" aria-label="Online"></span>
          </div>
          <div>
            <div class="jmt-chat-header-title">JMT Product Concierge</div>
            <div class="jmt-chat-header-sub">
              <span>●</span> Online &bull; Verified Assistant
            </div>
          </div>
        </div>
        <button class="jmt-chat-close-btn" id="jmt-chat-close-btn" type="button" aria-label="Close AI Assistant">&times;</button>
      </div>

      <div class="jmt-chat-messages" id="jmt-chat-messages">
        <!-- Messages loaded dynamically -->
      </div>

      <form class="jmt-chat-input-bar" id="jmt-chat-form">
        <input type="text" class="jmt-chat-input" id="jmt-chat-input" placeholder="Ask a question or select an option..." aria-label="Message to JMT Assistant" autocomplete="off" />
        <button type="submit" class="jmt-chat-send-btn" aria-label="Send message">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </form>
    `;

    document.body.appendChild(avatarWrap);
    document.body.appendChild(chatPanel);

    setupAssistantEvents(avatarWrap, chatPanel);
  }

  // Setup Event Listeners & Conversational Engine
  function setupAssistantEvents(avatarWrap, chatPanel) {
    const standBtn = document.getElementById('jmt-avatar-stand-btn');
    const promptBubble = document.getElementById('jmt-avatar-prompt');
    const closeBtn = document.getElementById('jmt-chat-close-btn');
    const chatForm = document.getElementById('jmt-chat-form');
    const chatInput = document.getElementById('jmt-chat-input');
    const messagesContainer = document.getElementById('jmt-chat-messages');

    let isChatOpen = false;
    let isHovered = false;
    let hideTimer = null;

    // In-Chat Step Form State (1: Name, 2: Email, 3: Phone, 4: Role, 5: Interest, 6: Message, 7: Review)
    let formStep = 0;
    let formData = {
      name: '',
      email: '',
      phone: '',
      role: '',
      interest: '',
      message: ''
    };

    // Show / Hide helper functions for Avatar
    function showAvatar() {
      if (isChatOpen) return;
      avatarWrap.classList.add('visible');
    }

    function hideAvatar() {
      if (isChatOpen || isHovered) return;
      avatarWrap.classList.remove('visible');
    }

    // Reset 6-second inactivity timer
    function resetHideTimer() {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      if (!isHovered && !isChatOpen) {
        hideTimer = setTimeout(() => {
          hideAvatar();
        }, 6000);
      }
    }

    // Toggle Chat
    function openChat() {
      isChatOpen = true;
      if (hideTimer) clearTimeout(hideTimer);
      chatPanel.classList.add('active');
      avatarWrap.classList.add('hidden-for-chat');
      if (messagesContainer.children.length === 0) {
        renderWelcomeScreen();
      }
      setTimeout(() => chatInput && chatInput.focus(), 150);
    }

    function closeChat() {
      isChatOpen = false;
      chatPanel.classList.remove('active');
      avatarWrap.classList.remove('hidden-for-chat');
      avatarWrap.classList.remove('visible');
    }

    // Scroll Handler
    function handleScroll() {
      if (isChatOpen) return;
      showAvatar();
      resetHideTimer();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Hover pause: Prevent auto-hiding while user is interacting or reading
    avatarWrap.addEventListener('mouseenter', () => {
      isHovered = true;
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    });

    avatarWrap.addEventListener('mouseleave', () => {
      isHovered = false;
      if (avatarWrap.classList.contains('visible')) {
        resetHideTimer();
      }
    });

    // Start hidden
    avatarWrap.classList.remove('visible');

    standBtn?.addEventListener('click', openChat);
    promptBubble?.addEventListener('click', openChat);
    closeBtn?.addEventListener('click', closeChat);

    // Keyboard support (Escape closes chat)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isChatOpen) {
        closeChat();
      }
    });

    // Append Message to Chat
    function appendMessage(text, isUser = false) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `jmt-msg ${isUser ? 'user' : 'bot'}`;
      msgDiv.innerHTML = `<div class="jmt-msg-bubble">${text}</div>`;
      messagesContainer.appendChild(msgDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Render Guided Tour Node
    function renderTourNode(nodeKey) {
      const node = GUIDED_TOUR[nodeKey] || GUIDED_TOUR['main'];

      let optionsHTML = '';
      if (node.options && node.options.length > 0) {
        optionsHTML = `
          <div class="jmt-arising-header">
            <span>💡 Suggested Next Steps:</span>
          </div>
          <div class="jmt-tour-group">
            ${node.options.map(opt => {
              if (opt.url) {
                return `
                  <a href="${opt.url}" class="jmt-tour-opt ${opt.primary ? 'primary' : ''}">
                    <span>${opt.label}</span>
                    <span style="font-size:0.9rem;">&rarr;</span>
                  </a>
                `;
              } else if (opt.action === 'inquiry') {
                return `
                  <button type="button" class="jmt-tour-opt ${opt.primary ? 'primary' : ''}" data-action="inquiry">
                    <span>${opt.label}</span>
                    <span style="font-size:0.9rem;">📝 &rarr;</span>
                  </button>
                `;
              } else {
                return `
                  <button type="button" class="jmt-tour-opt ${opt.primary ? 'primary' : ''}" data-target="${opt.target}">
                    <span>${opt.label}</span>
                    <span style="font-size:0.9rem;">&rarr;</span>
                  </button>
                `;
              }
            }).join('')}
          </div>
        `;
      }

      const bubbleHTML = `
        <div class="jmt-intro-block">
          <div style="font-weight: 700; color: #0877E8; font-size: 0.96rem; margin-bottom: 0.35rem;">
            ${node.title}
          </div>
          <div style="font-size: 0.85rem; color: #E2E8F0; line-height: 1.55;">
            ${node.text}
          </div>
        </div>
        ${optionsHTML}
      `;

      appendMessage(bubbleHTML, false);
      chatInput.placeholder = "Ask a question or select an option above...";
    }

    // Initial Welcome Screen
    function renderWelcomeScreen() {
      messagesContainer.innerHTML = '';
      formStep = 0;
      formData = { name: '', email: '', phone: '', role: '', interest: '', message: '' };
      renderTourNode('main');
    }

    // Form Field Validation Rules
    const VALIDATORS = {
      name: (val) => {
        if (!val || val.trim().length < 2) {
          return { valid: false, error: 'Please enter your full name (at least 2 characters).' };
        }
        if (!/[a-zA-Z]/.test(val)) {
          return { valid: false, error: 'Full name must contain letters.' };
        }
        return { valid: true };
      },

      email: (val) => {
        if (!val || val.trim().length === 0) {
          return { valid: false, error: 'Please enter your email address.' };
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(val.trim())) {
          return { valid: false, error: 'Please enter a valid email address (e.g. name@brokerage.com).' };
        }
        return { valid: true };
      },

      phone: (val) => {
        const clean = (val || '').trim();
        if (!clean || clean.toLowerCase() === 'skip' || clean === 'Not provided') {
          return { valid: true, isSkip: true };
        }
        const digits = clean.replace(/\D/g, '');
        if (digits.length < 7 || digits.length > 15) {
          return { valid: false, error: 'Please enter a valid phone number (at least 7 digits) or click "Skip".' };
        }
        return { valid: true, isSkip: false };
      },

      role: (val) => {
        if (!val || val.trim().length < 2) {
          return { valid: false, error: 'Please select or specify your real estate status.' };
        }
        return { valid: true };
      },

      interest: (val) => {
        if (!val || val.trim().length < 2) {
          return { valid: false, error: 'Please select your area of interest.' };
        }
        return { valid: true };
      },

      message: (val) => {
        if (!val || val.trim().length < 4) {
          return { valid: false, error: 'Please enter a brief message or requirements (at least 4 characters).' };
        }
        return { valid: true };
      }
    };

    // Inline Error Display & Shake Helper
    function showFieldError(inputEl, containerEl, message) {
      if (!containerEl) return;
      const existing = containerEl.querySelector('.jmt-field-error');
      if (existing) existing.remove();

      const errEl = document.createElement('div');
      errEl.className = 'jmt-field-error';
      errEl.innerHTML = `<span>⚠️ ${escapeHTML(message)}</span>`;

      if (inputEl) {
        inputEl.classList.add('jmt-input-invalid');
        setTimeout(() => inputEl.classList.remove('jmt-input-invalid'), 600);
        inputEl.focus();
      }

      containerEl.appendChild(errEl);
    }

    function clearFieldError(inputEl, containerEl) {
      if (inputEl) inputEl.classList.remove('jmt-input-invalid');
      if (containerEl) {
        const existing = containerEl.querySelector('.jmt-field-error');
        if (existing) existing.remove();
      }
    }

    // Start Step-by-Step Conversational Lead/Inquiry Form
    function startStepForm(reason) {
      formStep = 1;
      formData = { name: '', email: '', phone: '', role: '', interest: '', message: '' };

      const introText = reason || "I'm interested in Just My Team and would like someone to contact me.";
      appendMessage(`📝 ${escapeHTML(introText)}`, true);

      setTimeout(() => {
        renderFormStep(1);
      }, 300);
    }

    // Render Form Step (One-by-one in-chat input)
    function renderFormStep(step) {
      formStep = step;

      if (step === 1) {
        const stepHTML = `
          <div class="jmt-step-container" id="jmt-step-box-1">
            <div class="jmt-step-meta">
              <span class="jmt-step-pill">Step 1 of 6</span>
              <span class="jmt-step-topic">Full Name</span>
            </div>
            <div class="jmt-progress-track">
              <div class="jmt-progress-fill" style="width: 16%;"></div>
            </div>
            <p class="jmt-step-lead">
              We're delighted to connect with you! What is your <strong>Full Name</strong>?
            </p>
            <div class="jmt-input-action-row">
              <input type="text" class="jmt-text-field" id="inq-step-name" placeholder="e.g. Marcus Vance" autofocus autocomplete="name" />
              <button type="button" class="jmt-step-forward-btn" id="btn-step-name">Next &rarr;</button>
            </div>
          </div>
        `;
        appendMessage(stepHTML, false);
        chatInput.placeholder = "Enter your full name...";

        const boxEl = document.getElementById('jmt-step-box-1');
        const inputEl = document.getElementById('inq-step-name');
        const btnEl = document.getElementById('btn-step-name');
        inputEl?.focus();

        inputEl?.addEventListener('input', () => clearFieldError(inputEl, boxEl));

        const handleStep1 = () => {
          const val = (inputEl.value || chatInput.value).trim();
          const check = VALIDATORS.name(val);
          if (!check.valid) {
            showFieldError(inputEl, boxEl, check.error);
            return;
          }
          clearFieldError(inputEl, boxEl);
          formData.name = val;
          inputEl.value = '';
          chatInput.value = '';
          appendMessage(val, true);
          setTimeout(() => renderFormStep(2), 300);
        };

        btnEl?.addEventListener('click', handleStep1);
        inputEl?.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleStep1();
          }
        });
      } else if (step === 2) {
        const stepHTML = `
          <div class="jmt-step-container" id="jmt-step-box-2">
            <div class="jmt-step-meta">
              <span class="jmt-step-pill">Step 2 of 6</span>
              <span class="jmt-step-topic">Email Address</span>
            </div>
            <div class="jmt-progress-track">
              <div class="jmt-progress-fill" style="width: 33%;"></div>
            </div>
            <p class="jmt-step-lead">
              Nice to meet you, <strong>${escapeHTML(formData.name)}</strong>! What is your <strong>Email Address</strong>?
            </p>
            <div class="jmt-input-action-row">
              <input type="email" class="jmt-text-field" id="inq-step-email" placeholder="agent@brokerage.com" autocomplete="email" />
              <button type="button" class="jmt-step-forward-btn" id="btn-step-email">Next &rarr;</button>
            </div>
          </div>
        `;
        appendMessage(stepHTML, false);
        chatInput.placeholder = "Enter your email address...";

        const boxEl = document.getElementById('jmt-step-box-2');
        const inputEl = document.getElementById('inq-step-email');
        const btnEl = document.getElementById('btn-step-email');
        inputEl?.focus();

        inputEl?.addEventListener('input', () => clearFieldError(inputEl, boxEl));

        const handleStep2 = () => {
          const val = (inputEl.value || chatInput.value).trim();
          const check = VALIDATORS.email(val);
          if (!check.valid) {
            showFieldError(inputEl, boxEl, check.error);
            return;
          }
          clearFieldError(inputEl, boxEl);
          formData.email = val;
          inputEl.value = '';
          chatInput.value = '';
          appendMessage(val, true);
          setTimeout(() => renderFormStep(3), 300);
        };

        btnEl?.addEventListener('click', handleStep2);
        inputEl?.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleStep2();
          }
        });
      } else if (step === 3) {
        const stepHTML = `
          <div class="jmt-step-container" id="jmt-step-box-3">
            <div class="jmt-step-meta">
              <span class="jmt-step-pill">Step 3 of 6</span>
              <span class="jmt-step-topic">Phone Number</span>
            </div>
            <div class="jmt-progress-track">
              <div class="jmt-progress-fill" style="width: 50%;"></div>
            </div>
            <p class="jmt-step-lead">
              What is your <strong>Phone Number</strong> (Optional direct line)?
            </p>
            <div class="jmt-input-action-row">
              <input type="tel" class="jmt-text-field" id="inq-step-phone" placeholder="(555) 234-5678" autocomplete="tel" />
              <button type="button" class="jmt-step-forward-btn" id="btn-step-phone">Next &rarr;</button>
              <button type="button" class="jmt-step-skip-btn" id="btn-step-phone-skip">Skip</button>
            </div>
          </div>
        `;
        appendMessage(stepHTML, false);
        chatInput.placeholder = "Enter phone number or click 'Skip'...";

        const boxEl = document.getElementById('jmt-step-box-3');
        const inputEl = document.getElementById('inq-step-phone');
        const btnEl = document.getElementById('btn-step-phone');
        const skipEl = document.getElementById('btn-step-phone-skip');
        inputEl?.focus();

        inputEl?.addEventListener('input', () => clearFieldError(inputEl, boxEl));

        const handleStep3 = (isSkip = false) => {
          if (isSkip) {
            clearFieldError(inputEl, boxEl);
            formData.phone = 'Not provided';
            inputEl.value = '';
            chatInput.value = '';
            appendMessage('Skipped', true);
            setTimeout(() => renderFormStep(4), 300);
            return;
          }

          const val = (inputEl.value || chatInput.value).trim();
          const check = VALIDATORS.phone(val);
          if (!check.valid) {
            showFieldError(inputEl, boxEl, check.error);
            return;
          }
          clearFieldError(inputEl, boxEl);
          formData.phone = check.isSkip ? 'Not provided' : val;
          inputEl.value = '';
          chatInput.value = '';
          appendMessage(formData.phone === 'Not provided' ? 'Skipped' : val, true);
          setTimeout(() => renderFormStep(4), 300);
        };

        btnEl?.addEventListener('click', () => handleStep3(false));
        skipEl?.addEventListener('click', () => handleStep3(true));
        inputEl?.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleStep3(false);
          }
        });
      } else if (step === 4) {
        const stepHTML = `
          <div class="jmt-step-container" id="jmt-step-box-4">
            <div class="jmt-step-meta">
              <span class="jmt-step-pill">Step 4 of 6</span>
              <span class="jmt-step-topic">Agent / Broker Status</span>
            </div>
            <div class="jmt-progress-track">
              <div class="jmt-progress-fill" style="width: 66%;"></div>
            </div>
            <p class="jmt-step-lead">
              What is your professional <strong>Agent / Broker status</strong>?
            </p>
            <div class="jmt-role-grid">
              <button type="button" class="jmt-role-card" data-role="Licensed Real Estate Agent">
                <span class="jmt-role-icon">🏡</span>
                <span class="jmt-role-name">Licensed Agent</span>
              </button>
              <button type="button" class="jmt-role-card" data-role="Land & Acreage Specialist">
                <span class="jmt-role-icon">🌲</span>
                <span class="jmt-role-name">Land Specialist</span>
              </button>
              <button type="button" class="jmt-role-card" data-role="Principal Broker / Agency Owner">
                <span class="jmt-role-icon">💼</span>
                <span class="jmt-role-name">Principal Broker</span>
              </button>
              <button type="button" class="jmt-role-card" data-role="Real Estate Investor / Buyer">
                <span class="jmt-role-icon">💰</span>
                <span class="jmt-role-name">Real Estate Investor</span>
              </button>
            </div>
          </div>
        `;
        appendMessage(stepHTML, false);
        chatInput.placeholder = "Select your role above or type it...";

        document.querySelectorAll('.jmt-role-card').forEach(btn => {
          btn.addEventListener('click', () => {
            const roleVal = btn.getAttribute('data-role');
            formData.role = roleVal;
            appendMessage(roleVal, true);
            setTimeout(() => renderFormStep(5), 300);
          });
        });
      } else if (step === 5) {
        const stepHTML = `
          <div class="jmt-step-container" id="jmt-step-box-5">
            <div class="jmt-step-meta">
              <span class="jmt-step-pill">Step 5 of 6</span>
              <span class="jmt-step-topic">Area of Interest</span>
            </div>
            <div class="jmt-progress-track">
              <div class="jmt-progress-fill" style="width: 83%;"></div>
            </div>
            <p class="jmt-step-lead">
              What are you primarily <strong>interested in</strong>?
            </p>
            <div class="jmt-role-grid">
              <button type="button" class="jmt-role-card" data-interest="Building a Referral Team">
                <span class="jmt-role-icon">👥</span>
                <span class="jmt-role-name">Building Referral Team</span>
              </button>
              <button type="button" class="jmt-role-card" data-interest="Managing Property Opportunities">
                <span class="jmt-role-icon">🌲</span>
                <span class="jmt-role-name">Property Opportunities</span>
              </button>
              <button type="button" class="jmt-role-card" data-interest="Agents Network & Hierarchy Tree">
                <span class="jmt-role-icon">🌳</span>
                <span class="jmt-role-name">Agents Tree & Network</span>
              </button>
              <button type="button" class="jmt-role-card" data-interest="General Platform Membership">
                <span class="jmt-role-icon">✨</span>
                <span class="jmt-role-name">General Membership</span>
              </button>
            </div>
          </div>
        `;
        appendMessage(stepHTML, false);
        chatInput.placeholder = "Select your interest or type it...";

        document.querySelectorAll('#jmt-step-box-5 .jmt-role-card').forEach(btn => {
          btn.addEventListener('click', () => {
            const interestVal = btn.getAttribute('data-interest');
            formData.interest = interestVal;
            appendMessage(interestVal, true);
            setTimeout(() => renderFormStep(6), 300);
          });
        });
      } else if (step === 6) {
        const stepHTML = `
          <div class="jmt-step-container" id="jmt-step-box-6">
            <div class="jmt-step-meta">
              <span class="jmt-step-pill">Step 6 of 6</span>
              <span class="jmt-step-topic">Your Requirement / Message</span>
            </div>
            <div class="jmt-progress-track">
              <div class="jmt-progress-fill" style="width: 100%;"></div>
            </div>
            <p class="jmt-step-lead">
              Please share your requirement or brief message for our team:
            </p>
            <div class="jmt-msg-input-wrap">
              <textarea class="jmt-textarea-field" id="inq-step-msg" placeholder="e.g. Interested in learning more about setting up our broker network and land opportunities..."></textarea>
              <button type="button" class="jmt-submit-primary-btn" id="btn-step-msg">
                <span>Review Inquiry &rarr;</span>
              </button>
            </div>
          </div>
        `;
        appendMessage(stepHTML, false);
        chatInput.placeholder = "Type your requirement or message...";

        const boxEl = document.getElementById('jmt-step-box-6');
        const textareaEl = document.getElementById('inq-step-msg');
        const btnEl = document.getElementById('btn-step-msg');
        textareaEl?.focus();

        textareaEl?.addEventListener('input', () => clearFieldError(textareaEl, boxEl));

        const handleStep6 = () => {
          const val = (textareaEl.value || chatInput.value).trim();
          const check = VALIDATORS.message(val);
          if (!check.valid) {
            showFieldError(textareaEl, boxEl, check.error);
            return;
          }
          clearFieldError(textareaEl, boxEl);
          formData.message = val;
          textareaEl.value = '';
          chatInput.value = '';
          appendMessage(val, true);
          setTimeout(() => renderFormStep(7), 300);
        };

        btnEl?.addEventListener('click', handleStep6);
        textareaEl?.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleStep6();
          }
        });
      } else if (step === 7) {
        // Confirmation Review Step as required:
        // "Thanks! Please confirm that the information above is correct before submitting your inquiry."
        const summaryHTML = `
          <div class="jmt-review-container">
            <div class="jmt-review-head">
              <div class="jmt-review-badge">📋 Inquiry Summary</div>
              <div class="jmt-review-heading">Confirm Your Information</div>
            </div>

            <p style="font-size:0.83rem; color:#CBD5E1; margin:0.35rem 0 0.75rem; line-height:1.45;">
              Thanks! Please confirm that the information above is correct before submitting your inquiry.
            </p>

            <div class="jmt-review-grid">
              <div class="jmt-review-entry">
                <span class="jmt-entry-k">Name</span>
                <span class="jmt-entry-v">${escapeHTML(formData.name)}</span>
              </div>
              <div class="jmt-review-entry">
                <span class="jmt-entry-k">Email</span>
                <span class="jmt-entry-v jmt-highlight-val">${escapeHTML(formData.email)}</span>
              </div>
              <div class="jmt-review-entry">
                <span class="jmt-entry-k">Phone</span>
                <span class="jmt-entry-v">${escapeHTML(formData.phone || 'Not provided')}</span>
              </div>
              <div class="jmt-review-entry">
                <span class="jmt-entry-k">Status</span>
                <span class="jmt-entry-v">${escapeHTML(formData.role || 'Licensed Agent')}</span>
              </div>
              <div class="jmt-review-entry jmt-entry-full">
                <span class="jmt-entry-k">Interested In</span>
                <span class="jmt-entry-v">${escapeHTML(formData.interest || 'General Membership')}</span>
              </div>
              <div class="jmt-review-entry jmt-entry-full">
                <span class="jmt-entry-k">Requirement</span>
                <span class="jmt-entry-v jmt-msg-preview">"${escapeHTML(formData.message)}"</span>
              </div>
            </div>

            <div class="jmt-review-buttons">
              <button type="button" class="jmt-submit-primary-btn" id="btn-final-submit">
                <span>🚀 Confirm &amp; Submit Inquiry</span>
                <span class="jmt-arrow-icon">&rarr;</span>
              </button>
              <button type="button" class="jmt-restart-secondary-btn" id="btn-restart-form">
                <span>✏️ Edit Details / Restart</span>
              </button>
            </div>
          </div>
        `;
        appendMessage(summaryHTML, false);
        chatInput.placeholder = "Click 'Confirm & Submit Inquiry' to finalize...";

        document.getElementById('btn-final-submit')?.addEventListener('click', submitDirectInquiry);
        document.getElementById('btn-restart-form')?.addEventListener('click', () => {
          appendMessage("Let's edit the details.", true);
          setTimeout(() => renderFormStep(1), 300);
        });
      }
    }

    // Submit Inquiry Directly from Chat (Frontend Capture / Local Demo Log)
    function submitDirectInquiry() {
      formStep = 8;
      appendMessage("Confirming and submitting inquiry...", true);

      // Save inquiry to frontend localStorage log
      const inquiryPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        interest: formData.interest,
        message: formData.message,
        timestamp: new Date().toISOString(),
        page: window.location.pathname
      };

      try {
        const existing = JSON.parse(localStorage.getItem('jmt_inquiries') || '[]');
        existing.push(inquiryPayload);
        localStorage.setItem('jmt_inquiries', JSON.stringify(existing));
      } catch (e) {
        console.warn('LocalStorage unavailable', e);
      }

      setTimeout(() => {
        const successHTML = `
          <div class="jmt-celebrate-card">
            <div class="jmt-celebrate-icon">🎉</div>
            <div class="jmt-celebrate-title">Inquiry Recorded Successfully!</div>
            <div class="jmt-celebrate-body">
              Thank you, <strong>${escapeHTML(formData.name)}</strong>! Your inquiry details have been captured. Our team will review your requirements and reach out to <code>${escapeHTML(formData.email)}</code> promptly.
            </div>
            <div class="jmt-celebrate-actions">
              <a href="register.html?referral_code=JMT-FOUNDER" class="jmt-celebrate-btn primary">🚀 Join Free with JMT-FOUNDER</a>
              <a href="properties.html" class="jmt-celebrate-btn">🌲 View Properties</a>
              <button type="button" class="jmt-celebrate-btn ghost" id="btn-reset-chat">🧭 Main Menu</button>
            </div>
          </div>
        `;
        appendMessage(successHTML, false);
        chatInput.placeholder = "Ask any question or explore the platform...";

        document.getElementById('btn-reset-chat')?.addEventListener('click', () => {
          renderWelcomeScreen();
        });
      }, 400);
    }

    // Handle Click on a Tour Topic Node
    function handleTopicClick(targetKey, labelText) {
      if (labelText) {
        appendMessage(labelText, true);
      }
      setTimeout(() => {
        renderTourNode(targetKey);
      }, 300);
    }

    // Handle Freeform User Queries & Natural Language Engine
    function handleUserQuery(query) {
      const clean = query.trim();
      if (!clean) return;

      // If user is inside the step form, feed input directly to the active step
      if (formStep === 1) {
        const check = VALIDATORS.name(clean);
        if (!check.valid) {
          appendMessage(clean, true);
          appendMessage(`⚠️ ${check.error}`, false);
          return;
        }
        formData.name = clean;
        appendMessage(clean, true);
        setTimeout(() => renderFormStep(2), 300);
        return;
      } else if (formStep === 2) {
        const check = VALIDATORS.email(clean);
        if (!check.valid) {
          appendMessage(clean, true);
          appendMessage(`⚠️ ${check.error}`, false);
          return;
        }
        formData.email = clean;
        appendMessage(clean, true);
        setTimeout(() => renderFormStep(3), 300);
        return;
      } else if (formStep === 3) {
        const check = VALIDATORS.phone(clean);
        if (!check.valid) {
          appendMessage(clean, true);
          appendMessage(`⚠️ ${check.error}`, false);
          return;
        }
        formData.phone = check.isSkip ? 'Not provided' : clean;
        appendMessage(formData.phone === 'Not provided' ? 'Skipped' : clean, true);
        setTimeout(() => renderFormStep(4), 300);
        return;
      } else if (formStep === 4) {
        const check = VALIDATORS.role(clean);
        if (!check.valid) {
          appendMessage(clean, true);
          appendMessage(`⚠️ ${check.error}`, false);
          return;
        }
        formData.role = clean;
        appendMessage(clean, true);
        setTimeout(() => renderFormStep(5), 300);
        return;
      } else if (formStep === 5) {
        const check = VALIDATORS.interest(clean);
        if (!check.valid) {
          appendMessage(clean, true);
          appendMessage(`⚠️ ${check.error}`, false);
          return;
        }
        formData.interest = clean;
        appendMessage(clean, true);
        setTimeout(() => renderFormStep(6), 300);
        return;
      } else if (formStep === 6) {
        const check = VALIDATORS.message(clean);
        if (!check.valid) {
          appendMessage(clean, true);
          appendMessage(`⚠️ ${check.error}`, false);
          return;
        }
        formData.message = clean;
        appendMessage(clean, true);
        setTimeout(() => renderFormStep(7), 300);
        return;
      }

      // Standard Freeform Q&A
      appendMessage(clean, true);

      setTimeout(() => {
        const lower = clean.toLowerCase();

        // 1. LEAD / INQUIRY INTENT DETECTION
        if (
          lower.includes('i want to join') ||
          lower.includes('become a member') ||
          lower.includes('want an invite') ||
          lower.includes('want to know more') ||
          lower.includes('contact me') ||
          lower.includes('interested in just my team') ||
          lower.includes('fill form') ||
          lower.includes('contact form') ||
          lower.includes('submit inquiry') ||
          lower.includes('submit form')
        ) {
          startStepForm(clean);
          return;
        }

        // 2. NAVIGATION ASSISTANT
        if (lower.includes('show me features') || lower.includes('see features') || lower === 'features') {
          const navReply = `
            <div>You can explore all core features on our dedicated Features section:</div>
            <div class="jmt-tour-group" style="margin-top:0.6rem;">
              <a href="index.html#features" class="jmt-tour-opt primary">
                <span>🌟 Open Features Page</span>
                <span>&rarr;</span>
              </a>
              <button type="button" class="jmt-tour-opt" data-target="network_tree">
                <span>👥 Explore Agents Network in Chat</span>
                <span>&rarr;</span>
              </button>
            </div>
          `;
          appendMessage(navReply, false);
          return;
        }

        if (lower.includes('how does it work') || lower.includes('how it works')) {
          const navReply = `
            <div>Just My Team connects agents through a visual referral tree and shared deal tools:</div>
            <div class="jmt-tour-group" style="margin-top:0.6rem;">
              <a href="how-it-works.html" class="jmt-tour-opt primary">
                <span>📖 Open How It Works Page</span>
                <span>&rarr;</span>
              </a>
              <button type="button" class="jmt-tour-opt" data-target="referral">
                <span>🔄 5-Step Referral Process in Chat</span>
                <span>&rarr;</span>
              </button>
            </div>
          `;
          appendMessage(navReply, false);
          return;
        }

        if (lower.includes('see properties') || lower.includes('view properties') || lower.includes('browse properties') || lower.includes('properties list')) {
          const navReply = `
            <div>You can review verified land and property opportunities on our Properties directory:</div>
            <div class="jmt-tour-group" style="margin-top:0.6rem;">
              <a href="properties.html" class="jmt-tour-opt primary">
                <span>🌲 Open Properties Page</span>
                <span>&rarr;</span>
              </a>
              <button type="button" class="jmt-tour-opt" data-target="properties">
                <span>🏡 Property Details &amp; Fields</span>
                <span>&rarr;</span>
              </button>
            </div>
          `;
          appendMessage(navReply, false);
          return;
        }

        if (lower.includes('already have an account') || lower.includes('login') || lower.includes('sign in')) {
          const navReply = `
            <div>Welcome back! You can access your account from the Login page:</div>
            <div class="jmt-tour-group" style="margin-top:0.6rem;">
              <a href="login.html" class="jmt-tour-opt primary">
                <span>🔐 Open Login Page</span>
                <span>&rarr;</span>
              </a>
              <button type="button" class="jmt-tour-opt" data-target="main">
                <span>🧭 Main Menu</span>
                <span>&rarr;</span>
              </button>
            </div>
          `;
          appendMessage(navReply, false);
          return;
        }

        if (lower.includes('contact someone') || lower.includes('contact page') || lower.includes('get in touch')) {
          const navReply = `
            <div>You can reach our team via the Contact page or fill out our instant in-chat inquiry form:</div>
            <div class="jmt-tour-group" style="margin-top:0.6rem;">
              <button type="button" class="jmt-tour-opt primary" data-action="inquiry">
                <span>📝 Submit In-Chat Inquiry</span>
                <span>&rarr;</span>
              </button>
              <a href="contact.html" class="jmt-tour-opt">
                <span>📞 Open Contact Page</span>
                <span>&rarr;</span>
              </a>
            </div>
          `;
          appendMessage(navReply, false);
          return;
        }

        // 3. MATCHING AGAINST VERIFIED KNOWLEDGE BASE
        let matchedReply = null;
        let matchedId = null;

        // Specific high-priority matches
        if (lower.includes('tree') || lower.includes('hierarchy') || lower.includes('structure')) {
          matchedId = 'agents_tree';
        } else if (lower.includes('referral') || lower.includes('invite') || lower.includes('sponsor')) {
          matchedId = 'referral_system';
        } else if (lower.includes('network') || lower.includes('downline')) {
          matchedId = 'agents_network';
        } else if (lower.includes('propert') || lower.includes('acre') || lower.includes('apn') || lower.includes('zoning')) {
          matchedId = 'properties';
        } else if (lower.includes('journal') || lower.includes('note')) {
          matchedId = 'journal';
        } else if (lower.includes('chat') || lower.includes('message') || lower.includes('group')) {
          matchedId = 'chat';
        } else if (lower.includes('dashboard') || lower.includes('insight') || lower.includes('count')) {
          matchedId = 'dashboard';
        } else if (lower.includes('benefit') || lower.includes('why') || lower.includes('what is') || lower.includes('overview')) {
          matchedId = 'overview';
        }

        if (matchedId) {
          const found = KNOWLEDGE_BASE.find(k => k.id === matchedId);
          if (found) matchedReply = found.reply;
        } else {
          for (const item of KNOWLEDGE_BASE) {
            if (item.keywords.some(k => lower.includes(k))) {
              matchedReply = item.reply;
              break;
            }
          }
        }

        if (matchedReply) {
          const formatted = `
            <div>${matchedReply}</div>
            <div class="jmt-arising-header">
              <span>💡 Suggested Next Steps:</span>
            </div>
            <div class="jmt-tour-group">
              <button type="button" class="jmt-tour-opt primary" data-action="inquiry">
                <span>📝 Submit Broker Inquiry in Chat</span>
                <span>&rarr;</span>
              </button>
              <button type="button" class="jmt-tour-opt" data-target="network_tree">
                <span>👥 Agents Network &amp; Tree</span>
                <span>&rarr;</span>
              </button>
              <button type="button" class="jmt-tour-opt" data-target="properties">
                <span>🏡 Property Management Details</span>
                <span>&rarr;</span>
              </button>
              <button type="button" class="jmt-tour-opt" data-target="referral">
                <span>🔄 Referral Flow (5 Steps)</span>
                <span>&rarr;</span>
              </button>
              <button type="button" class="jmt-tour-opt" data-target="main">
                <span>🧭 Main Menu</span>
                <span>&rarr;</span>
              </button>
            </div>
          `;
          appendMessage(formatted, false);
        } else {
          // Strict Accuracy Rule fallback
          const fallback = `
            <div>I don't have verified information about that yet. You can contact the Just My Team team for more information or explore any of our verified platform areas below:</div>
            <div class="jmt-arising-header">
              <span>💡 Suggested Next Steps:</span>
            </div>
            <div class="jmt-tour-group">
              <button type="button" class="jmt-tour-opt primary" data-action="inquiry">
                <span>📝 Submit an Inquiry in Chat</span>
                <span>&rarr;</span>
              </button>
              <button type="button" class="jmt-tour-opt" data-target="main">
                <span>🧭 Return to Main Menu</span>
                <span>&rarr;</span>
              </button>
              <a href="contact.html" class="jmt-tour-opt">
                <span>📞 Contact Just My Team Team</span>
                <span>&rarr;</span>
              </a>
            </div>
          `;
          appendMessage(fallback, false);
        }
      }, 350);
    }

    // Delegate Click on Tour Buttons, Arising Questions, and Form Actions
    document.addEventListener('click', (e) => {
      // 1. Tour Node Target Button
      const tourBtn = e.target.closest('[data-target]');
      if (tourBtn) {
        const targetKey = tourBtn.getAttribute('data-target');
        const labelText = tourBtn.querySelector('span')?.textContent?.trim() || '';
        if (targetKey) {
          handleTopicClick(targetKey, labelText);
        }
        return;
      }

      // 2. Action Buttons (inquiry, etc.)
      const actionBtn = e.target.closest('[data-action]');
      if (actionBtn) {
        const action = actionBtn.getAttribute('data-action');
        if (action === 'inquiry') {
          startStepForm();
        } else if (action === 'main' || action === 'welcome') {
          renderWelcomeScreen();
        }
        return;
      }
    });

    // Chat Form Submit
    chatForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = chatInput.value;
      chatInput.value = '';
      handleUserQuery(val);
    });
  }

  // Self initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createAssistantDOM);
  } else {
    createAssistantDOM();
  }
})();
