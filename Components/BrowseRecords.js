import ImageSection from './ImageSection';
import styles from './BrowseRecords.module.scss';

const BrowseRecords = () => {
    return (
        <div className={styles.imageSectionCont}>
            <ImageSection   
                mainBg='#FFF804' 
                mainImage='clutterImage'
                mainImageAlt='Cluttered desk with records spread all over it' 
                sticker='recordPlane'
                stickerAlt='Black and white plane sticker'
                tagColor='black'
                tagBorder='2px solid black'
                tagContent="for fans"
                headerContent='Limited edition, unlimited inspiration.'
                blurbContent='Discover new records, special releases one-offs – directly supporting artists and labels in the process.'
                topButtonContent='browse records'
                topButtonColor='white'
                topButtonBgColor='black'
                bottomButtonContent='artists on crates'
                bottomButtonColor='black'
                bottomButtonBorder='2px solid black'
                direction='row-reverse'
            />
            <ImageSection 
                mainBg='#E4E5DE'
                mainImage='holdingRecord' 
                mainImageAlt='Cluttered desk with records spread all over it' 
                sticker='fastRecord'
                stickerAlt='Black and white plane sticker'
                tagColor='black'
                tagBorder='2px solid black'
                tagContent="for artists"
                headerContent='Your music on vinyl, direct to your fans.'
                blurbContent='Press beautiful physical copies of your next release on vinyl. We make the process easy, so you can focus on the music.'
                topButtonContent='learn more'
                topButtonColor='white'
                topButtonBgColor='black'
                bottomButtonContent='compare project types'
                bottomButtonColor='black'
                bottomButtonBorder='2px solid black'
            />
        </div>
    )
}

export default BrowseRecords