/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CyberShield — Phishing Awareness Dashboard                ║
 * ║  app.js — Multi-email training platform                     ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────── CONSTANTS ───────────────────────
  const ARC_CIRCUMFERENCE = 327;

  // ─────────────────────── EMAIL SCENARIOS ─────────────────
  const EMAILS = [
    {
      id: 'password-reset',
      label: 'Password Reset',
      icon: '🔑',
      category: 'Credential Theft',
      difficulty: 'Beginner',
      difficultyColor: 'text-success-400',
      from: { name: 'IT Security Department', email: 'no-reply@security-dpt.com' },
      to: 'you@yourcompany.com',
      date: 'March 11, 2026 — 09:14 AM',
      subject: '⚠ URGENT: Your Password Expires in 2 Hours — Immediate Action Required',
      body: `
        <p><span class="red-flag relative" data-flag="greeting"
          data-tip="Legitimate IT emails address you by name. 'Dear Valued Employee' is a generic greeting used in mass-phishing.">Dear Valued Employee,</span></p>
        <p>Our security monitoring systems have detected that your corporate password is set to
          <span class="red-flag relative font-semibold text-danger-400" data-flag="urgency"
            data-tip="Creating a false sense of urgency pressures victims into acting without thinking.">expire within the next 2 hours</span>.
          To maintain uninterrupted access to all company resources, including email, VPN, and cloud applications,
          you must reset your password immediately.</p>
        <p>Failure to update your credentials will result in
          <span class="red-flag relative" data-flag="threat"
            data-tip="Threatening account lockout is a fear tactic. Real IT departments provide grace periods.">your account being locked for a minimum of 72 hours</span>,
          during which you will be unable to access any corporate services.</p>
        <p class="text-center py-3">
          <span class="malicious-btn relative inline-block rounded-xl bg-gradient-to-r from-danger-500 to-red-600 px-10 py-3.5 text-sm font-bold text-white shadow-xl shadow-danger-500/25"
            data-flag="button"
            data-tip="This button would redirect to a fake login page designed to steal your real credentials.">
            🔒 Reset Password Now
          </span></p>
        <p class="text-xs text-brand-200/35">If the button doesn't work, use this link:<br/>
          <span class="red-flag relative text-brand-400 break-all" data-flag="link"
            data-tip="The URL uses a subdomain trick — the real domain is 'security-dpt.com', NOT your company.">
            https://yourcompany-reset.security-dpt.com/auth/reset?token=a8f29c</span></p>
        <hr class="border-brand-700/15 my-3"/>
        <div class="text-xs text-brand-200/35 space-y-1">
          <p>This is an automated message from the IT Security Department.</p>
          <p><span class="red-flag relative" data-flag="footer"
            data-tip="No helpdesk number or ticket link is provided. Legitimate IT always shares verifiable contact info.">
            Please do not reply to this email. For questions, contact the helpdesk.</span></p>
          <p class="pt-1">© 2026 IT Security Department</p>
        </div>`,
      flags: {
        sender:   { label: 'Spoofed Sender Domain',   severity: 'critical', icon: '🔴', explanation: 'The address <no-reply@security-dpt.com> uses a fake domain. Real IT emails come from your company\'s actual domain (e.g., @yourcompany.com). Always check the part after the @ sign!' },
        subject:  { label: 'Urgent Subject Line',      severity: 'high',     icon: '🟠', explanation: 'Words like "URGENT" and "Immediate Action Required" are scare tactics. They want you to panic and click without thinking. Real IT sends reminders days ahead, not last-minute threats.' },
        greeting: { label: 'Generic Greeting',          severity: 'medium',   icon: '🟡', explanation: '"Dear Valued Employee" means they don\'t know your name — this is a mass email sent to thousands of people. Your real IT team knows who you are.' },
        urgency:  { label: 'Fake 2-Hour Deadline',     severity: 'high',     icon: '🟠', explanation: 'A "2-hour" countdown is designed to rush you. Real password policies give you days of warning with multiple reminders — never a sudden countdown.' },
        threat:   { label: 'Lockout Threat',            severity: 'high',     icon: '🟠', explanation: 'Threatening a 72-hour lockout is meant to scare you into clicking. Real IT never punishes employees this harshly for a password issue.' },
        button:   { label: 'Dangerous Button',          severity: 'critical', icon: '🔴', explanation: 'This button would take you to a fake website that looks like your company\'s login page but steals your password. Never click links in unexpected emails!' },
        link:     { label: 'Fake URL',                  severity: 'critical', icon: '🔴', explanation: 'Look carefully: "yourcompany-reset.security-dpt.com" — the real website is "security-dpt.com" (a scammer\'s site), NOT your company. The scammer added your company name as a trick.' },
        footer:   { label: 'No Real Contact Info',      severity: 'medium',   icon: '🟡', explanation: 'There\'s no phone number, no ticket system link, no way to verify this email. Real IT always gives you a way to check — like calling the helpdesk directly.' },
      },
    },
    {
      id: 'prize-scam',
      label: 'Prize Winner',
      icon: '🎁',
      category: 'Advance Fee Fraud',
      difficulty: 'Beginner',
      difficultyColor: 'text-success-400',
      from: { name: 'Amazon Rewards Team', email: 'rewards@amazn-gifts.com' },
      to: 'you@gmail.com',
      date: 'March 10, 2026 — 03:22 PM',
      subject: '🎉 Congratulations! You\'ve Won a $500 Amazon Gift Card!',
      body: `
        <p><span class="red-flag relative" data-flag="greeting"
          data-tip="They don't know your name — this is sent to millions of random email addresses.">Dear Lucky Customer,</span></p>
        <p>We're excited to inform you that your email address was
          <span class="red-flag relative font-semibold text-success-400" data-flag="too-good"
            data-tip="You can't win a contest you never entered. If it sounds too good to be true, it is!">randomly selected as the winner of our $500 Amazon Gift Card giveaway!</span></p>
        <p>To claim your prize, simply verify your identity by providing your shipping address and a small
          <span class="red-flag relative font-semibold text-danger-400" data-flag="fee"
            data-tip="Legitimate prizes NEVER require you to pay a fee to claim them. This is a classic advance-fee scam.">processing fee of $4.99</span>
          to cover delivery costs.</p>
        <p class="text-center py-3">
          <span class="malicious-btn relative inline-block rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-3.5 text-sm font-bold text-white shadow-xl shadow-green-500/25"
            data-flag="button"
            data-tip="This takes you to a fake Amazon page that will steal your credit card number and personal information.">
            🎁 Claim Your Gift Card
          </span></p>
        <p><span class="red-flag relative" data-flag="expire"
          data-tip="'Offer expires in 24 hours' creates fake urgency to stop you from thinking or asking someone for advice.">⏰ This offer expires in 24 hours. Claim now before it's too late!</span></p>
        <hr class="border-brand-700/15 my-3"/>
        <div class="text-xs text-brand-200/35 space-y-1">
          <p><span class="red-flag relative" data-flag="footer"
            data-tip="There's no real Amazon address, no customer service number. Amazon's real emails come from @amazon.com.">Amazon Rewards Program · Customer Engagement Team</span></p>
        </div>`,
      flags: {
        sender:   { label: 'Fake Amazon Domain',        severity: 'critical', icon: '🔴', explanation: '"amazn-gifts.com" is NOT Amazon. Notice the spelling — it\'s "amazn" not "amazon". Scammers register domains that look almost right. Real Amazon emails come from @amazon.com.' },
        greeting: { label: 'Generic Greeting',           severity: 'medium',   icon: '🟡', explanation: '"Dear Lucky Customer" — they don\'t know your name because this was sent to millions of people. Amazon knows your real name from your account.' },
        'too-good':{ label: 'Too Good To Be True',       severity: 'high',     icon: '🟠', explanation: 'You can\'t win a contest you never entered! No company gives away $500 gift cards randomly. If something seems too good to be true, it always is.' },
        fee:      { label: 'Requires Payment',           severity: 'critical', icon: '🔴', explanation: 'Asking for "just $4.99" is the real scam. They want your credit card number. Real prizes NEVER require you to pay anything to claim them.' },
        button:   { label: 'Credential Harvesting Link', severity: 'critical', icon: '🔴', explanation: 'This button leads to a fake Amazon-lookalike website designed to steal your credit card, address, and personal information.' },
        expire:   { label: 'Fake Deadline',              severity: 'high',     icon: '🟠', explanation: '"Expires in 24 hours!" is pressure to act fast without thinking. Real promotions don\'t disappear overnight — and they never threaten you.' },
        footer:   { label: 'No Real Contact Info',       severity: 'medium',   icon: '🟡', explanation: 'No verifiable Amazon address, no customer service phone number. A real Amazon email includes links to your account and order history.' },
      },
    },
    {
      id: 'package-delivery',
      label: 'Package Delivery',
      icon: '📦',
      category: 'Smishing / Phishing',
      difficulty: 'Intermediate',
      difficultyColor: 'text-warn-400',
      from: { name: 'FedEx Delivery Notification', email: 'tracking@fed-ex-shipping.net' },
      to: 'you@gmail.com',
      date: 'March 9, 2026 — 11:47 AM',
      subject: '📦 Delivery Failed: Package #FX-8829471 — Action Required',
      body: `
        <p>Hello,</p>
        <p>We attempted to deliver your package
          <span class="red-flag relative font-semibold text-brand-400" data-flag="tracking"
            data-tip="This tracking number doesn't follow FedEx's real format. Scammers use random numbers that look official.">#FX-8829471</span>
          today but were unable to complete the delivery because
          <span class="red-flag relative" data-flag="reason"
            data-tip="'Incomplete address' is vague on purpose — they want you to click to 'fix' it, but it's a trap.">the shipping address is incomplete</span>.</p>
        <p>To reschedule your delivery, please
          <span class="red-flag relative" data-flag="verify"
            data-tip="'Confirm your address' means they want your home address, phone number, and possibly credit card.">confirm your address and pay a redelivery fee of $2.50</span>
          within 48 hours, or the package will be returned to the sender.</p>
        <p class="text-center py-3">
          <span class="malicious-btn relative inline-block rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 px-10 py-3.5 text-sm font-bold text-white shadow-xl shadow-purple-500/25"
            data-flag="button"
            data-tip="This link goes to a fake FedEx page that will steal your personal and payment information.">
            📦 Reschedule Delivery
          </span></p>
        <hr class="border-brand-700/15 my-3"/>
        <div class="text-xs text-brand-200/35 space-y-1">
          <p><span class="red-flag relative" data-flag="footer"
            data-tip="'Do not reply' with no real FedEx tracking link. Real FedEx emails let you track at fedex.com.">This is an automated notification. Do not reply. Track at fedex-shipping.net</span></p>
        </div>`,
      flags: {
        sender:   { label: 'Fake FedEx Domain',        severity: 'critical', icon: '🔴', explanation: '"fed-ex-shipping.net" is NOT FedEx. FedEx\'s real domain is @fedex.com. The dashes and different extension (.net vs .com) are dead giveaways.' },
        subject:  { label: 'Creates Worry',             severity: 'high',     icon: '🟠', explanation: '"Delivery Failed" is designed to make you worried about a package — even if you haven\'t ordered anything. Scammers count on the anxiety making you click.' },
        tracking: { label: 'Fake Tracking Number',      severity: 'medium',   icon: '🟡', explanation: 'This tracking number format doesn\'t match real FedEx numbers. You can verify any tracking number directly on fedex.com — never through email links.' },
        reason:   { label: 'Vague Problem',              severity: 'medium',   icon: '🟡', explanation: '"Incomplete address" is vague on purpose. If your address was really wrong, the real delivery service would show exactly what\'s missing.' },
        verify:   { label: 'Asks for Payment',           severity: 'critical', icon: '🔴', explanation: 'FedEx does NOT charge $2.50 "redelivery fees" via email. They leave a door tag and reschedule for free. This is just a way to steal your credit card.' },
        button:   { label: 'Phishing Link',              severity: 'critical', icon: '🔴', explanation: 'This button goes to a fake website designed to look like FedEx but will steal your address, phone number, and payment info.' },
        footer:   { label: 'Fake Tracking Link',         severity: 'medium',   icon: '🟡', explanation: 'The tracking link goes to "fedex-shipping.net" — NOT the real "fedex.com". Always type the real company URL directly into your browser.' },
      },
    },
    {
      id: 'ceo-urgency',
      label: 'CEO Urgent Request',
      icon: '👔',
      category: 'Business Email Compromise',
      difficulty: 'Advanced',
      difficultyColor: 'text-danger-400',
      from: { name: 'Michael Chen (CEO)', email: 'm.chen@yourcompany-corp.com' },
      to: 'you@yourcompany.com',
      date: 'March 11, 2026 — 08:03 AM',
      subject: 'Quick favor — need this handled ASAP (confidential)',
      body: `
        <p><span class="red-flag relative" data-flag="greeting"
          data-tip="A real CEO would usually address you by name. This casual greeting could be sent to anyone.">Hey,</span></p>
        <p>I'm
          <span class="red-flag relative" data-flag="unavailable"
            data-tip="'In a meeting, can't talk' is a classic excuse to prevent you from calling to verify. Real bosses are reachable.">in a board meeting right now and can't take calls</span>,
          but I need a quick favor.</p>
        <p>We need to send a
          <span class="red-flag relative font-semibold text-danger-400" data-flag="giftcards"
            data-tip="NO legitimate business transaction involves buying gift cards. This is THE #1 sign of a CEO impersonation scam.">client appreciation gift — can you purchase 5 Google Play gift cards at $100 each?</span>
          It's for an important client meeting this afternoon.</p>
        <p><span class="red-flag relative" data-flag="secret"
          data-tip="Asking you to keep it secret means they don't want you to verify with anyone who would spot the scam.">Please keep this between us for now — I'll explain when I'm out of the meeting.</span></p>
        <p><span class="red-flag relative" data-flag="codes"
          data-tip="Asking for photos of scratch-off codes is exactly how gift card scams work. Once they have the codes, the money is gone forever.">Once you have them, just scratch off the backs and send me photos of the codes via email. I'll reimburse you today.</span></p>
        <p class="text-brand-200/50">Thanks,<br/>
        <span class="red-flag relative" data-flag="signature"
          data-tip="'Sent from my iPhone' is used to excuse poor formatting. Also, a real CEO's email signature would have their full title and company info.">Michael<br/><em class="text-brand-200/30">Sent from my iPhone</em></span></p>`,
      flags: {
        sender:    { label: 'Lookalike Email Domain',    severity: 'critical', icon: '🔴', explanation: '"yourcompany-corp.com" is NOT your real company domain. The scammer added "-corp" to make it look real. Always check the exact domain — one letter difference = fake!' },
        greeting:  { label: 'Suspiciously Casual',       severity: 'medium',   icon: '🟡', explanation: 'Just "Hey" with no name? Your real CEO\'s emails would have a more personal or professional tone and would address you by name.' },
        unavailable:{ label: '"Can\'t Talk" Excuse',      severity: 'high',     icon: '🟠', explanation: '"In a meeting, can\'t take calls" is the key trick — it stops you from picking up the phone and calling the real CEO to verify. Always call to confirm unusual requests!' },
        giftcards: { label: 'Gift Card Request',          severity: 'critical', icon: '🔴', explanation: 'THIS IS THE BIGGEST RED FLAG. No real business transaction uses gift cards. Gift cards = scam, 100% of the time. Real companies use purchase orders and invoices.' },
        secret:    { label: 'Asked to Keep Secret',       severity: 'high',     icon: '🟠', explanation: '"Keep this between us" means they don\'t want you asking your coworkers or the real CEO — because that would expose the scam immediately.' },
        codes:     { label: 'Wants Gift Card Codes',      severity: 'critical', icon: '🔴', explanation: 'Asking for photos of scratched-off codes is how the thief steals the money. Once they have the codes, they drain the gift cards within minutes. The money is gone forever.' },
        signature: { label: 'Minimal Email Signature',    severity: 'medium',   icon: '🟡', explanation: 'Just a first name and "Sent from my iPhone"? A real CEO typically has a full signature with their title, company name, and contact info.' },
      },
    },
    {
      id: 'bank-alert',
      label: 'Bank Security Alert',
      icon: '🏦',
      category: 'Financial Phishing',
      difficulty: 'Intermediate',
      difficultyColor: 'text-warn-400',
      from: { name: 'Chase Bank Security', email: 'alert@chase-security-center.com' },
      to: 'you@gmail.com',
      date: 'March 10, 2026 — 07:31 PM',
      subject: '🚨 Suspicious Activity Detected on Your Chase Account',
      body: `
        <p>Dear Customer,</p>
        <p>We have detected
          <span class="red-flag relative font-semibold text-danger-400" data-flag="activity"
            data-tip="Vague 'suspicious activity' is designed to scare you. A real bank would specify what happened (transaction amount, location, merchant).">suspicious activity on your Chase account</span>.
          For your protection, we have temporarily
          <span class="red-flag relative" data-flag="limited"
            data-tip="Claiming they 'limited' your account creates panic. Real banks call you on the phone for urgent security issues.">limited access to your account</span>.</p>
        <p>To restore full access, please verify your identity immediately by confirming your:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-brand-200/60">
          <li><span class="red-flag relative" data-flag="info"
            data-tip="A real bank NEVER asks for your full Social Security Number, password, or PIN via email. They already have your information!">Full name, Social Security Number, and account password</span></li>
          <li>Debit card number and PIN</li>
        </ul>
        <p class="text-center py-3">
          <span class="malicious-btn relative inline-block rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-10 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/25"
            data-flag="button"
            data-tip="This takes you to a fake Chase website that looks identical to the real one but steals everything you type.">
            🔐 Verify My Identity
          </span></p>
        <p class="text-xs"><span class="red-flag relative" data-flag="deadline"
          data-tip="'24 hours or your account will be closed' is a scare tactic. Real banks don't give email ultimatums.">If you do not verify within 24 hours, your account will be permanently closed for security purposes.</span></p>
        <hr class="border-brand-700/15 my-3"/>
        <div class="text-xs text-brand-200/35 space-y-1">
          <p><span class="red-flag relative" data-flag="footer"
            data-tip="'chase-security-center.com' is NOT Chase's real website (chase.com). The footer tries to look official but leads to a scam.">© 2026 JPMorgan Chase & Co. · chase-security-center.com</span></p>
        </div>`,
      flags: {
        sender:   { label: 'Fake Chase Domain',          severity: 'critical', icon: '🔴', explanation: '"chase-security-center.com" is NOT Chase Bank. Chase\'s real domain is @chase.com. Scammers create domains with extra words to trick you.' },
        subject:  { label: 'Scary Subject Line',          severity: 'high',     icon: '🟠', explanation: '"Suspicious Activity Detected" is designed to trigger panic so you act without thinking. If there was real fraud, Chase would CALL you.' },
        activity: { label: 'Vague "Suspicious Activity"', severity: 'high',     icon: '🟠', explanation: 'No details about what the suspicious activity actually was — no transaction amount, no merchant name. A real bank would tell you specifically what happened.' },
        limited:  { label: 'Account Limitation Scare',    severity: 'high',     icon: '🟠', explanation: '"Limited access to your account" is meant to scare you into clicking. If your account is really frozen, call the number on the back of your debit card.' },
        info:     { label: 'Asks for Sensitive Data',      severity: 'critical', icon: '🔴', explanation: 'Your bank will NEVER ask for your SSN, password, or PIN via email. They already have your information on file! This is the #1 rule of banking security.' },
        button:   { label: 'Credential Stealing Link',    severity: 'critical', icon: '🔴', explanation: 'This button leads to a fake Chase website that looks identical to the real one, but everything you type goes straight to the criminals.' },
        deadline: { label: 'Permanent Deletion Threat',   severity: 'high',     icon: '🟠', explanation: '"Account will be permanently closed" — this is completely fake. Banks don\'t delete accounts via email ultimatums. Always call your bank directly.' },
        footer:   { label: 'Fake Official Footer',        severity: 'medium',   icon: '🟡', explanation: 'The footer links to "chase-security-center.com" — a scam site, NOT the real "chase.com". Scammers make footers look official to build false trust.' },
      },
    },
  ];

  // ─────────────────────── STATE ───────────────────────────
  let currentEmailIndex = 0;
  let threatsDetected = 0;
  const revealedFlags = new Set();
  let isTrainingMode = true;
  const emailProgress = {}; // emailId → Set of found flags

  EMAILS.forEach(e => { emailProgress[e.id] = new Set(); });

  // ─────────────────────── SEVERITY STYLES ─────────────────
  const SEVERITY_CLASSES = {
    critical: 'text-danger-400',
    high: 'text-warn-400',
    medium: 'text-brand-200',
  };

  // ─────────────────────── DOM REFERENCES ──────────────────
  const $ = id => document.getElementById(id);
  const $riskArc      = $('risk-arc');
  const $riskBar      = $('risk-bar');
  const $riskValue    = $('risk-value');
  const $riskLabel    = $('risk-label');
  const $flagsFound   = $('flags-found');
  const $flagsTotal   = $('flags-total');
  const $logCount     = $('log-count');
  const $detectionLog = $('detection-log');
  const $banner       = $('instruction-banner');
  const $btnReset     = $('btn-reset');
  const $btnScan      = $('btn-complete-scan');
  const $scanModal    = $('scan-modal');
  const $modalOverlay = $('modal-overlay');
  const $modalClose   = $('modal-close');
  const $modalBody    = $('modal-body');
  const $btnMode      = $('btn-mode-toggle');
  const $modeDot      = $('mode-dot');
  const $modeLabel    = $('mode-label');
  const $inboxList    = $('inbox-list');
  const $emailFrom    = $('email-from');
  const $emailDate    = $('email-date');
  const $emailTo      = $('email-to');
  const $emailSubject = $('email-subject');
  const $emailBody    = $('email-body');
  const $emailSender  = $('email-sender-addr');
  const $statThreat   = $('stat-threat-level');
  const $statAnalysis = $('stat-analysis');
  const $overallProgress = $('overall-progress');
  const $overallBar   = $('overall-bar');

  // ─────────────────────── RENDER INBOX LIST ───────────────
  function renderInbox() {
    if (!$inboxList) return;
    $inboxList.innerHTML = '';

    EMAILS.forEach((email, idx) => {
      const progress = emailProgress[email.id];
      const total = Object.keys(email.flags).length;
      const found = progress.size;
      const isComplete = found === total;
      const isActive = idx === currentEmailIndex;

      const item = document.createElement('button');
      item.className = `w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 flex items-start gap-3 group ${
        isActive
          ? 'bg-brand-700/20 ring-1 ring-brand-500/30'
          : 'hover:bg-surface-800/60'
      }`;
      item.onclick = () => loadEmail(idx);

      item.innerHTML = `
        <span class="text-lg mt-0.5 shrink-0">${email.icon}</span>
        <div class="min-w-0 flex-1">
          <div class="flex items-center justify-between gap-2">
            <p class="font-semibold text-sm truncate ${isActive ? 'text-white' : 'text-brand-200/70 group-hover:text-white'}">${email.label}</p>
            ${isComplete
              ? '<span class="shrink-0 text-[.6rem] font-bold text-success-400 bg-success-400/10 px-1.5 py-0.5 rounded-full">✓ Done</span>'
              : found > 0
                ? `<span class="shrink-0 text-[.6rem] font-bold text-warn-400 bg-warn-400/10 px-1.5 py-0.5 rounded-full">${found}/${total}</span>`
                : '<span class="shrink-0 text-[.6rem] font-bold text-brand-200/30 bg-surface-800 px-1.5 py-0.5 rounded-full">New</span>'
            }
          </div>
          <p class="text-[.6rem] text-brand-200/40 truncate mt-0.5">${email.category} · ${email.difficulty}</p>
          <div class="mt-1.5 h-1 w-full rounded-full bg-surface-800 overflow-hidden">
            <div class="h-full rounded-full transition-all duration-500 ${isComplete ? 'bg-success-400' : 'bg-brand-500'}" style="width:${total ? (found/total*100) : 0}%"></div>
          </div>
        </div>
      `;
      $inboxList.appendChild(item);
    });

    updateOverallProgress();
  }

  // ─────────────────────── LOAD EMAIL ──────────────────────
  function loadEmail(index) {
    currentEmailIndex = index;
    const email = EMAILS[index];
    const totalFlags = Object.keys(email.flags).length;

    // Restore state for this email
    revealedFlags.clear();
    emailProgress[email.id].forEach(k => revealedFlags.add(k));
    threatsDetected = revealedFlags.size;

    // Update header
    if ($emailFrom)    $emailFrom.textContent = email.from.name;
    if ($emailSender)  { $emailSender.textContent = `<${email.from.email}>`; $emailSender.dataset.flag = 'sender'; }
    if ($emailDate)    $emailDate.textContent = email.date;
    if ($emailTo)      $emailTo.textContent = email.to;
    if ($emailSubject) {
      $emailSubject.innerHTML = '';
      const subjectSpan = document.createElement('span');
      subjectSpan.className = 'red-flag relative';
      subjectSpan.dataset.flag = 'subject';
      subjectSpan.dataset.tip = email.flags.subject ? email.flags.subject.explanation : '';
      subjectSpan.textContent = email.subject;
      $emailSubject.appendChild(subjectSpan);
    }

    // Sender flag
    if ($emailSender) {
      $emailSender.className = 'red-flag ml-1 relative text-brand-200/60';
      $emailSender.dataset.tip = email.flags.sender ? email.flags.sender.explanation : '';
    }

    // Update body
    if ($emailBody) $emailBody.innerHTML = email.body;

    // Update totals
    $flagsTotal.textContent = totalFlags;
    $flagsFound.textContent = threatsDetected;

    // Update risk gauge
    const pct = totalFlags ? Math.round((threatsDetected / totalFlags) * 100) : 0;
    updateRiskGauge(pct);

    // Reset detection log
    $detectionLog.innerHTML = '';
    $logCount.textContent = '0';
    if (threatsDetected === 0) {
      $detectionLog.innerHTML = '<p class="text-brand-200/25 italic">No flags detected yet — click on suspicious elements in the email.</p>';
    } else {
      // Re-populate log entries for already found flags
      let idx = 0;
      revealedFlags.forEach(key => {
        idx++;
        const flag = email.flags[key];
        if (flag) addLogEntry(key, idx, email);
      });
      $logCount.textContent = idx;
    }

    // Reattach flag click listeners
    attachFlagListeners(email);

    // Re-apply revealed state
    revealedFlags.forEach(key => {
      const el = document.querySelector(`[data-flag="${key}"]`);
      if (el) {
        el.classList.add('revealed');
        if (el.classList.contains('malicious-btn')) {
          el.classList.add('ring-2', 'ring-danger-400');
        } else {
          el.classList.add('bg-red-500/10', 'rounded');
        }
      }
    });

    // Apply test mode if active
    if (!isTrainingMode) document.body.classList.add('test-mode');

    // Update stat bar
    updateStatBar(email);

    // Re-render inbox to show active state
    renderInbox();
  }

  // ─────────────────────── ATTACH FLAG LISTENERS ───────────
  function attachFlagListeners(email) {
    Object.keys(email.flags).forEach(key => {
      const elements = document.querySelectorAll(`[data-flag="${key}"]`);
      elements.forEach(el => {
        el.style.cursor = 'pointer';
        // Clone and replace to remove old listeners
        const newEl = el.cloneNode(true);
        el.parentNode.replaceChild(newEl, el);
        newEl.addEventListener('click', () => handleFlagClick(key, newEl, email));
      });
    });
  }

  // ─────────────────────── FLAG CLICK HANDLER ──────────────
  function handleFlagClick(key, el, email) {
    if (revealedFlags.has(key)) return;
    revealedFlags.add(key);
    emailProgress[email.id].add(key);

    const totalFlags = Object.keys(email.flags).length;

    // Visual highlight
    el.classList.add('revealed');
    if (el.classList.contains('malicious-btn')) {
      el.classList.add('ring-2', 'ring-danger-400');
    } else {
      el.classList.add('bg-red-500/10', 'rounded');
    }

    // Increment score
    threatsDetected++;
    $flagsFound.textContent = threatsDetected;

    // Update risk gauge
    const pct = Math.round((threatsDetected / totalFlags) * 100);
    updateRiskGauge(pct);

    // Detection log
    addLogEntry(key, threatsDetected, email);

    // Badge pulse
    $logCount.classList.remove('animate-bounce');
    void $logCount.offsetWidth;
    $logCount.classList.add('animate-bounce');

    // Update stat bar & inbox
    updateStatBar(email);
    renderInbox();

    // Check completion
    if (threatsDetected === totalFlags) showCompletionBanner(email);
  }

  // ─────────────────────── RISK GAUGE ──────────────────────
  function updateRiskGauge(pct) {
    const offset = ARC_CIRCUMFERENCE - (ARC_CIRCUMFERENCE * pct) / 100;
    $riskArc.setAttribute('stroke-dashoffset', offset);
    $riskBar.style.width = pct + '%';
    animateCounter($riskValue, pct);

    let label, colorClass;
    if (pct <= 30)       { label = 'Low Risk';   colorClass = 'text-success-400'; }
    else if (pct <= 60)  { label = 'Moderate';   colorClass = 'text-warn-400'; }
    else if (pct < 100)  { label = 'High Risk';  colorClass = 'text-danger-400'; }
    else                 { label = 'All Found!'; colorClass = 'text-danger-400'; }
    $riskLabel.textContent = label;
    $riskLabel.className = 'text-[.6rem] font-semibold uppercase tracking-[.15em] mt-0.5 ' + colorClass;
  }

  function animateCounter(el, target) {
    const start = parseInt(el.textContent, 10) || 0;
    const duration = 600;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + (target - start) * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ─────────────────────── DETECTION LOG ───────────────────
  function addLogEntry(key, index, email) {
    const flag = email.flags[key];
    if (!flag) return;

    if (index === 1 && $detectionLog.querySelector('.italic')) $detectionLog.innerHTML = '';

    const entry = document.createElement('div');
    entry.className = 'log-entry flex items-start gap-2 rounded-lg bg-surface-800/60 px-3 py-2.5 ring-1 ring-brand-700/10';
    const sevClass = SEVERITY_CLASSES[flag.severity];

    entry.innerHTML = `
      <span class="mt-0.5 shrink-0">${flag.icon}</span>
      <div class="min-w-0">
        <p class="font-semibold text-white text-[.8rem]">${flag.label}</p>
        <p class="text-brand-200/50 leading-snug mt-0.5 text-[.7rem]">${flag.explanation}</p>
        <p class="mt-1 text-brand-200/35 text-[.65rem]">
          <span class="${sevClass} font-medium capitalize">${flag.severity}</span> · Flag #${index}
        </p>
      </div>
    `;
    $detectionLog.prepend(entry);
    $logCount.textContent = index;
  }

  // ─────────────────────── COMPLETION ──────────────────────
  function showCompletionBanner(email) {
    let nextIdx = -1;
    for (let i = 0; i < EMAILS.length; i++) {
      if (i !== currentEmailIndex && emailProgress[EMAILS[i].id].size < Object.keys(EMAILS[i].flags).length) {
        nextIdx = i;
        break;
      }
    }

    $banner.className = 'stagger-1 corner-deco rounded-xl border border-success-400/30 bg-gradient-to-r from-green-900/40 to-surface-900 p-5 text-sm text-green-200 backdrop-blur-sm';
    $banner.innerHTML = `
      <p class="font-semibold text-green-300 mb-1.5 flex items-center gap-2">
        <span class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-green-500/20 text-xs">🏆</span>
        Email Complete — ${email.label}
      </p>
      <p>You found all <strong>${Object.keys(email.flags).length} red flags</strong> in this phishing email! Great job!
      ${nextIdx >= 0
        ? ` Ready for the next challenge? <button onclick="window._loadEmail(${nextIdx})" class="underline font-semibold text-green-300 hover:text-white">Try "${EMAILS[nextIdx].label}" →</button>`
        : ' <strong class="text-green-300">You\'ve completed all email scenarios!</strong> You\'re well-prepared to spot phishing in the real world.'
      }</p>
    `;
  }

  // ─────────────────────── COMPLETE SCAN MODAL ─────────────
  function showScanSummary() {
    const email = EMAILS[currentEmailIndex];
    const totalFlags = Object.keys(email.flags).length;
    const found = threatsDetected;
    const missed = totalFlags - found;
    const pct = totalFlags ? Math.round((found / totalFlags) * 100) : 0;

    let grade, gradeColor, verdict;
    if (pct === 100)      { grade = 'A+'; gradeColor = 'text-green-400'; verdict = 'Perfect score! You identified every red flag. You have a sharp eye for phishing tactics.'; }
    else if (pct >= 70)   { grade = 'B';  gradeColor = 'text-yellow-300'; verdict = 'Good job! You caught most threats. Review the missed flags below to improve.'; }
    else if (pct >= 40)   { grade = 'C';  gradeColor = 'text-orange-400'; verdict = 'Needs improvement. Several phishing indicators went undetected.'; }
    else                  { grade = 'D';  gradeColor = 'text-red-400'; verdict = 'High risk! Most threats were missed. Review the explanations carefully.'; }

    let missedHtml = '';
    if (missed > 0) {
      const items = Object.entries(email.flags)
        .filter(([k]) => !revealedFlags.has(k))
        .map(([,f]) => `<li class="flex items-start gap-2"><span>${f.icon}</span><span><strong class="text-white">${f.label}</strong> — ${f.explanation}</span></li>`)
        .join('');
      missedHtml = `<div class="mt-4"><p class="font-semibold text-red-400 mb-2">⚠ Missed Flags (${missed})</p><ul class="space-y-2 text-brand-200/60 text-xs leading-relaxed">${items}</ul></div>`;
    }

    let detectedHtml = '';
    if (found > 0) {
      const items = Object.entries(email.flags)
        .filter(([k]) => revealedFlags.has(k))
        .map(([,f]) => `<li class="flex items-center gap-2"><span>${f.icon}</span><span class="text-white">${f.label}</span></li>`)
        .join('');
      detectedHtml = `<div class="mt-4"><p class="font-semibold text-green-400 mb-2">✓ Detected Flags (${found})</p><ul class="space-y-1.5 text-xs">${items}</ul></div>`;
    }

    $modalBody.innerHTML = `
      <div class="flex flex-col items-center mb-5">
        <div class="flex h-24 w-24 items-center justify-center rounded-full border-4 border-brand-700/30 bg-surface-800 mb-3">
          <span class="${gradeColor} text-4xl font-extrabold">${grade}</span>
        </div>
        <p class="text-lg font-bold text-white">${found} / ${totalFlags} Threats Detected</p>
        <p class="text-xs text-brand-200/50 mt-1">${email.label} · Detection Rate: ${pct}%</p>
      </div>
      <div class="rounded-lg bg-surface-800/80 p-4 text-sm text-brand-200/70 leading-relaxed border border-brand-700/20">${verdict}</div>
      ${detectedHtml}
      ${missedHtml}
      <div class="mt-5 rounded-lg bg-brand-900/30 p-4 border border-brand-700/20">
        <p class="font-semibold text-brand-200 text-sm mb-2">📋 What To Do In Real Life</p>
        <ul class="space-y-1 text-xs text-brand-200/60">
          <li>• <strong class="text-brand-200">Don't click</strong> — never click links in unexpected emails.</li>
          <li>• <strong class="text-brand-200">Verify separately</strong> — go to the real website by typing it yourself.</li>
          <li>• <strong class="text-brand-200">Call them</strong> — use a known phone number, not one from the email.</li>
          <li>• <strong class="text-brand-200">Report it</strong> — forward suspicious emails to your IT team or email provider.</li>
        </ul>
      </div>
    `;

    $scanModal.classList.remove('hidden');
    $scanModal.classList.add('flex');
    requestAnimationFrame(() => {
      $modalOverlay.classList.add('opacity-100');
      $modalBody.parentElement.classList.add('scale-100', 'opacity-100');
      $modalBody.parentElement.classList.remove('scale-95', 'opacity-0');
    });
  }

  function closeModal() {
    if (!$scanModal || $scanModal.classList.contains('hidden')) return;
    $modalOverlay.classList.remove('opacity-100');
    $modalBody.parentElement.classList.remove('scale-100', 'opacity-100');
    $modalBody.parentElement.classList.add('scale-95', 'opacity-0');
    setTimeout(() => { $scanModal.classList.add('hidden'); $scanModal.classList.remove('flex'); }, 250);
  }

  // ─────────────────────── STAT BAR ────────────────────────
  function updateStatBar(email) {
    if (!email) email = EMAILS[currentEmailIndex];
    if ($statThreat) $statThreat.textContent = email.category;
    if ($statAnalysis) {
      const total = Object.keys(email.flags).length;
      const pct = total ? Math.round((threatsDetected / total) * 100) : 0;
      $statAnalysis.textContent = pct === 100 ? 'Complete' : pct > 0 ? `${pct}% Scanned` : 'In Progress';
      $statAnalysis.className = 'font-semibold ' + (pct===100 ? 'text-success-400' : pct>0 ? 'text-warn-400' : 'text-brand-200');
    }
  }

  // ─────────────────────── OVERALL PROGRESS ────────────────
  function updateOverallProgress() {
    let totalFlags = 0, totalFound = 0;
    EMAILS.forEach(e => {
      totalFlags += Object.keys(e.flags).length;
      totalFound += emailProgress[e.id].size;
    });
    const pct = totalFlags ? Math.round((totalFound / totalFlags) * 100) : 0;
    if ($overallProgress) $overallProgress.textContent = `${totalFound}/${totalFlags} flags · ${pct}%`;
    if ($overallBar) $overallBar.style.width = pct + '%';
  }

  // ─────────────────────── RESET ───────────────────────────
  function resetDashboard() {
    const email = EMAILS[currentEmailIndex];
    emailProgress[email.id].clear();
    threatsDetected = 0;
    revealedFlags.clear();

    $banner.className = 'stagger-1 corner-deco rounded-xl border border-brand-700/20 bg-gradient-to-r from-brand-900/40 via-surface-900/80 to-surface-900 p-5 text-sm text-brand-100 backdrop-blur-sm';
    $banner.innerHTML = `
      <p class="font-semibold text-white mb-1.5 flex items-center gap-2">
        <span class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-500/20 text-brand-400 text-xs">🎯</span>
        How it works
      </p>
      <p>This simulated inbox contains <strong class="text-danger-400">phishing emails</strong>. Select an email from the inbox,
        then click on <span class="text-danger-400 font-semibold">suspicious elements</span> to reveal why they are dangerous.
        Your <strong class="text-warn-400">Risk Score</strong> and <strong class="text-brand-200">Detection Log</strong> update in real time.</p>
    `;

    if (!isTrainingMode) toggleMode();
    closeModal();
    loadEmail(currentEmailIndex);
  }

  // ─────────────────────── MODE TOGGLE ─────────────────────
  function toggleMode() {
    isTrainingMode = !isTrainingMode;
    if (isTrainingMode) {
      document.body.classList.remove('test-mode');
      $btnMode.className = 'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 transition-all duration-300 cursor-pointer bg-success-400/10 text-success-400 ring-success-400/20 hover:bg-success-400/20';
      $modeDot.className = 'h-1.5 w-1.5 rounded-full bg-success-400 transition-colors duration-300';
      $modeLabel.textContent = 'Training Mode';
    } else {
      document.body.classList.add('test-mode');
      $btnMode.className = 'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 transition-all duration-300 cursor-pointer bg-warn-400/10 text-warn-400 ring-warn-400/20 hover:bg-warn-400/20';
      $modeDot.className = 'h-1.5 w-1.5 rounded-full bg-warn-400 transition-colors duration-300';
      $modeLabel.textContent = 'Test Mode';
    }
  }

  // ─────────────────────── PARTICLES ───────────────────────
  function spawnParticles() {
    const container = $('particles');
    if (!container) return;
    const COLORS = ['rgba(99,102,241,.3)','rgba(139,92,246,.25)','rgba(6,182,212,.2)','rgba(236,72,153,.15)'];
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 4 + 1.5;
      const dur = Math.random() * 12 + 8;
      p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${COLORS[Math.floor(Math.random()*COLORS.length)]};box-shadow:0 0 ${size*3}px ${COLORS[Math.floor(Math.random()*COLORS.length)]};animation-duration:${dur}s;animation-delay:${Math.random()*10}s;`;
      container.appendChild(p);
    }
  }

  // ─────────────────────── PARALLAX ────────────────────────
  function initParallax() {
    const els = document.querySelectorAll('[data-parallax]');
    if (!els.length) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        els.forEach(el => { el.style.transform = `translateY(${y * (parseFloat(el.dataset.parallax)||.02) * -1}px)`; });
        ticking = false;
      });
    }, { passive: true });
  }

  // ─────────────────────── EVENT LISTENERS ──────────────────
  if ($btnReset) $btnReset.addEventListener('click', resetDashboard);
  if ($btnScan)  $btnScan.addEventListener('click', showScanSummary);
  if ($btnMode)  $btnMode.addEventListener('click', toggleMode);
  if ($modalClose)   $modalClose.addEventListener('click', closeModal);
  if ($modalOverlay) $modalOverlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ─────────────────────── INIT ────────────────────────────
  window._loadEmail = loadEmail;
  window.resetDashboard = resetDashboard;
  spawnParticles();
  initParallax();
  loadEmail(0);
});
