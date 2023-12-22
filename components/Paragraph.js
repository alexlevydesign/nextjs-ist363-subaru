import classnames from 'classnames/bind';

import styles from './paragraph.module.scss';

const cx = classnames.bind(styles);

const Paragraph = ({children, color, textAlign, marginBottom, marginTop, marginLeft, marginRight, paddingBottom, paddingTop, paddingLeft, paddingRight}) => {

    const paragraphClasses = cx({
        paragraph: true,
        [`font-color-${color}`] : color,
        [`margin-top-${marginTop}`] : marginTop,
        [`margin-right-${marginRight}`] : marginRight,
        [`margin-bottom-${marginBottom}`] : marginBottom,
        [`margin-left-${marginLeft}`] : marginLeft,

        [`padding-top-${paddingTop}`] : paddingTop,
        [`padding-right-${paddingRight}`] : paddingRight,
        [`padding-bottom-${paddingBottom}`] : paddingBottom,
        [`padding-left-${paddingLeft}`] : paddingLeft,

        [`text-align-${textAlign}`] : textAlign
    });

    return <p className={paragraphClasses}>{children}</p>
}
export default Paragraph; 