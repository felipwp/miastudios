import { TERMS_OF_SERVICE_CHANNEL } from "./Channels";
import {
  APPLICATION_EMOJI,
  ARROWRIGHT_EMOJI,
  CHECK_EMOJI,
  COMMISSION_EMOJI,
  INVITED_EMOJI,
  LOGO_EMOJI,
  OTHER_EMOJI,
  SUPPORT_EMOJI,
  TWITTER_EMOJI,
  YOUTUBE_EMOJI,
} from "./Emojis";

const box: string = "`";
const resizer: string = null;

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Regular tickets
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const REGULAR_TICKET_EMOJIS: string[] = [
  null,
  COMMISSION_EMOJI.id,
  SUPPORT_EMOJI.id,
  APPLICATION_EMOJI.id,
];
export const REGULAR_TICKET_EMBEDS: any[][] = [
  [
    `**${LOGO_EMOJI.text} Welcome, this is the Mia Studios create-a-ticket center.**`,
    `Here you can create a ticket and receive instantaneous support from a member of our staff team. Make sure to make use of all of our ticket commands to make your experience creating a ticket easier and quicker:
    
    ${box}${process.env.PREFIX}close                 ${box}| Closes your ticket.
    ${box}${process.env.PREFIX}leave                 ${box}| Leave a ticket if you joined through an invite.
    ${box}${process.env.PREFIX}invite <@User>        ${box}| Allows another user to join your ticket.
    ${box}${process.env.PREFIX}kick <@User>          ${box}| Kicks the designated user from the ticket.`,
    resizer,
    "Commission Tickets",
    false,
  ],
  [
    `**${COMMISSION_EMOJI.text} Commission Tickets**`,
    `You may order a commission from Mia Studios using our commission ticket system. Once you have created a ticket, you will be asked multiple short questions to help give us an idea of what you are looking to order. Make sure to read <#${TERMS_OF_SERVICE_CHANNEL}> before creating a ticket. A manager will then help give a budget for your project. Once a budget has been given, and if you agree to continue, one of our builders will claim the commission.
  
      __Estimated Support Time__: **15** minutes.
      
      **React with ${COMMISSION_EMOJI.text} to open a Commission Ticket.**`,
    resizer,
    "Commission Tickets",
    false,
  ],
  [
    `**${SUPPORT_EMOJI.text} Support Tickets**`,
    `If you have an issue, or just require information on a product, we recommend opening a support ticket. Once you have opened a ticket you will be asked a few questions about what you require support for, before a member of our support team is found.
  
      __Estimated Support Time__: **20** minutes.
      
      **React with ${SUPPORT_EMOJI.text} to open a Support Ticket.**`,
    resizer,
    "Support Tickets",
    false,
  ],
  [
    `**${APPLICATION_EMOJI.text} Application Tickets**`,
    `You may work with us from Mia Studios by applying for a job with our ticket system. Once the ticket is opened we will ask multiple questions to get an idea of whom you are, what you do and other things that may vary depending on the role you are applying for, and hopefully you will be a part of our team.
  
    __Estimated Support Time__: **20** minutes.
    
    **React with ${APPLICATION_EMOJI.text} to open an Application Ticket.**`,
    resizer,
    "Application Tickets",
    false,
  ],
];

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Priority Tickets
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const PRIORITY_TICKET_EMOJIS: string[] = [
  null,
  COMMISSION_EMOJI.id,
  SUPPORT_EMOJI.id,
];
export const PRIORITY_TICKET_EMBEDS: any[][] = [
  [
    `**${LOGO_EMOJI.text} Welcome, this is our priority-ticket center.**`,
    `As you can see you now have two options to create a ticket and receive instantaneous support from a member of our staff team. This is because you are either a nitro booster or a frequent client. You will now have exclusive permissions now because of your amazing support. Make sure to make use of all of our ticket commands to make your experience creating a ticket easier and quicker:
    ​
    ${box}${process.env.PREFIX}close                 ${box}| Closes your ticket.
    ${box}${process.env.PREFIX}leave                 ${box}| Leave a ticket if you joined through an invite.
    ${box}${process.env.PREFIX}invite <@User>        ${box}| Allows another user to join your ticket.
    ${box}${process.env.PREFIX}kick <@User>          ${box}| Kicks the designated user from the ticket.`,
    resizer,
    "Commission Tickets",
    false,
  ],
  [
    `**${COMMISSION_EMOJI.text} Priority Commission Tickets**`,
    `You may order a special commission from Mia Studios using our priority commission ticket system. Once you have created a ticket, you will be asked multiple short questions to help give us an idea of what you are looking to order. Make sure to read <#${TERMS_OF_SERVICE_CHANNEL}> before creating a ticket. A manager will then help give a budget for your project. Once a budget has been given, and if you agree to continue, we will manually select the best builder.
      
    __Estimated Support Time__: **5** minutes.
      
      **React with ${COMMISSION_EMOJI.text} to open a Priority Commission Ticket.**`,
    resizer,
    "Priority Commission Tickets",
    false,
  ],
  [
    `**${SUPPORT_EMOJI.text} Priority Support Tickets**`,
    `If you have an issue, or just require information on a product, we recommend opening a support ticket. Once you have opened a ticket you will be asked a few questions about what you require support for, before a member of our support team is found.
      
    __Estimated Support Time__: **5** minutes.
      
      **React with ${SUPPORT_EMOJI.text} to open a Priority Support Ticket.**`,
    resizer,
    "Priority upport Tickets",
    false,
  ],
];
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Terms of Service
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const TERMS_OF_SERVICE_EMBEDS: any[][] = [
  [
    `**${LOGO_EMOJI.text} Mia Studios Terms of Service**`,
    `**1.0 Commissions**

  **1.1** When purchase any commissions you agree to our Terms of Service.
  **1.2** You may not claim any work from a commission as your own. This includes claiming any artwork of our builds as your own e.g. a render.
  **1.3** You may not resell any commissions without purchasing the rights to do so.
  **1.4** If resell rights are purchased you may still not claim any work as your own. You will only receive the rights to sell the build completed, while crediting Mia Studios.
  **1.5** Once a commission has been completed we will not store any files to ensure you are the sole owner of the product. It is your responsibility to keep the file safe, and if you lose it then it is not our responsibility to send you another copy.
  **1.6** We are allowed to deny service to any potential customers for any reason we see fair.
  **1.7** We may stop a commission if it breaches our terms of service or rules. If this happens while the commission is being built, you may not be refunded. More information in our refund policy.
  **1.8** We have a strict no refund policy. Once a commission has been completed we will not provide a refund unless there is a major issue with the product that makes it unusable. More information is in our refund policy.
  **1.9** We require a 50% upfront payment on commissions above 100 USD. You will not receive any refunds unless we can not finish the commission for some reason.
  **1.10** For orders less than $100. Full advance.
  **1.11** For orders above $100. 50% advance and 50% when work is done.
  **1.12** All commissions will be provided as a .schematic file once complete - unless agreed otherwise.
  **1.13** We reserve the rights to display any completed projects on our social media and in our portfolio. If a product must however be kept secret until a given date however we may comply.
  **1.14** If payments are sent over Paypal they will be made as an invoice on Paypal.`,
    resizer,
    "Terms of Service",
    false,
  ],
  [
    null,
    `**2.0 Build Shop**

    **2.1** When you purchase any build from our discord store you agree to our Terms of Service.
    **2.2** You may not claim any work from our shop as your own. This includes claiming any artwork of our builds as your own. **e.g. a render**.
    **2.3** You may not resell any builds from our shop, or redistribute them in any way.
    **2.4** Once you have made a purchase you will be given a schematic to the product. We will not store any files to ensure you are the sole owner of the product. It is your responsibility to keep the file safe.
    **2.5** We are allowed to deny service to any potential customers for any reason we see fair.
    **2.6** You accept that the product(s) you’re purchasing are not exclusive. This means they may be resold by us after your purchase.
    **2.7** We have a strict no refund policy. Once a build has been purchased no refunds can be made. More information is in our refund policy.
    **2.8** You understand that you must come to us if you have an issue before contacting any other party. There are sometimes issues with the automated system, and we will be more than happy to help resolve any issues.
    **2.9** All products will be provided as a .schematic file inside of a .zip folder. If you have any issues with this format we are more than happy to help convert it.
    **2.10** You understand that the images provided of the products are in-game pictures (some using shader packs to enhance the products), and some renders. When purchasing any of our products you agree that you are happy with the amount of images provided - and understand the build you are buying.`,
    resizer,
    "Terms of Service",
    false,
  ],
  [
    null,
    `**Refund Policy**

    Commissions will not be refunded once they have been completed and paid for. If your commission goes over an agreed deadline we may offer a refund of up to 50%, and will work our hardest to finish the build shortly after. The amount refunded will depend on how lenient the deadline was, changes requested and the size of the job - as well as any other factors we see fit.
    
    If an issue on behalf of Mia Studios comes up which cause Mia Studios to have to close your commission, we will offer a full 100% refund, and will offer to send any unfinished or finished work completed in the time over.
    
    If you break our Terms Of Service, Rules or break the Law we will be required to close your commission - and will not offer a refund. This includes if you are to verbally harass our builders or managers while the commission is underway.`,
    resizer,
    "Terms of Service",
    false,
  ],
  [
    null,
    `If you are unhappy with the finished product we may offer a refund of up to 50%. This depends on the overall price of the commission, and we will base this off of weather we see a refund fair in the situation - based on the finished result and brief given. Overall, if a partial refund is sent or not will be decided by the owner of Mia Studios or a Manager. It is however the client’s job to feedback on any progress images given, and if no issue is outlined before the product is done the refund may be lowered.
    Pre-Made Builds will not be refunded unless there is a major issue with the product - which will be decided by the owner of Mia Studios or a Manager. If this is the case, the product will also be removed from the shop.
    
    As the products are downloads and are non-returnable, there is no way to ensure a product has been returned - and so we don’t allow for people to return products for a refund.
    
    If the wrong download is provided for a build, please contact us and we will send the correct download. We may offer a partial refund of up to 50% if the build is large scale and has taken you a long time to load in as a result of the wrong product being sent, or of up to 25% if you have to wait over 24 hours for support getting the correct product.
    
    **Please react with ${CHECK_EMOJI.text} to accept these Terms and Conditions**`,
    resizer,
    "Terms of Service",
    true,
  ],
];

export const INFORMATION_EMBED: any[] = [
  "**Where did you find us?**",
  `${INVITED_EMOJI.text} I was invited
  ${TWITTER_EMOJI.text} I came from Twitter
  ${YOUTUBE_EMOJI.text} I came from YouTube
  ${OTHER_EMOJI.text} I came from other social media`,
  resizer,
  "Information",
  false,
];

export const TIME_LIMIT_EMBED: any[] = [
  `${LOGO_EMOJI.text} Error!`,
  `${ARROWRIGHT_EMOJI.text} Time limit reached (${
    parseInt(process.env.EXPIRY_TIME) / 1000 / 60
  } minutes).`,
  resizer,
  "Error",
  true,
];

export const REVIEW_FINISH_EMBED: any[] = [
  `${LOGO_EMOJI.text} Thanks for the review!`,
  `${ARROWRIGHT_EMOJI.text} We at Mia Studios appreciate you taking your time to give us this wonderful review!`,
  null,
  "review",
  true,
];

// priority tickets
