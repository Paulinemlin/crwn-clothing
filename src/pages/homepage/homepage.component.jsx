import React from 'react'
import Directory from '../../components/directory/directory.component';
import PromoSection from '../../components/promo-section/promo-section.component'
import CategoryPreview from '../../components/category-preview/category-preview.component'

const HomePage = ({history}) => (
    <div className='homepage container mx-auto max-w-5xl'>
       <PromoSection />
       <CategoryPreview />
       <Directory history/>
       
    </div>
)

export default HomePage;
