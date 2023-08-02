import * as React from 'react'
import {
    FacebookShareButton, FacebookIcon,
    LinkedinShareButton, LinkedinIcon,
    TwitterShareButton, TwitterIcon,
    TelegramShareButton, TelegramIcon,
    WhatsappShareButton, WhatsappIcon,
    EmailShareButton, EmailIcon
} from "react-share"

const ShareComponent = () => {
    const shareUrl = window.location.href

    return (
        <span className="socialShare">
            <FacebookShareButton url={shareUrl}><FacebookIcon size={36}/></FacebookShareButton>
            <LinkedinShareButton url={shareUrl}><LinkedinIcon size={36} /></LinkedinShareButton>
            <TwitterShareButton url={shareUrl}><TwitterIcon size={36} /></TwitterShareButton>
            <TelegramShareButton url={shareUrl}><TelegramIcon size={36} /></TelegramShareButton>
            <WhatsappShareButton url={shareUrl}><WhatsappIcon size={36} /></WhatsappShareButton>
            <EmailShareButton url={shareUrl}><EmailIcon size={36} /></EmailShareButton>
        </span>
    )
}

export default ShareComponent