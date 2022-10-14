import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchInputField = () => (
    <div>
       <Input 
         style={{borderRadius:100+'px',}}  
         icon={{ name: 'search', circular: false, link: true }} 
         iconPosition='left' placeholder='Search users...' />
    </div>
)

export default SearchInputField;