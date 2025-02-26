// ** React Imports
import { ReactNode } from 'react'
import Head from 'next/head';

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import { callListFiles, getPage, getPaths, listFiles } from '../../lib/content'


// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const lms = ({ pageData }) => {

  return (
    <>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      
      <Box>
        <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

          <StyledLink href='/dashboard'>
            Back to Home
          </StyledLink>

          <h1>{pageData.title}</h1>

          <div className='testing' style={{textAlign: "left"}} dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />

          {pageData.prev && <Link href={pageData.prev}>Previous</Link>}
          {pageData.next && <Link href={pageData.next}>Next</Link>}
          {/* {console.log(pageData)} */}

        </Box>
      </Box>
    </>

  )
}

export async function getStaticProps({ params }) {
  const pageData = await getPage(params.page.join("/"));
  return { props: { pageData } };
}

export async function getStaticPaths() {
  //trying to automate the paths instead of hard coding them
  
  // const paths = getPaths();
  // return {
  //   paths,
  //   fallback: false,
  // };
  console.log(getPaths());
  const paths = [
    { params: { page: ['welcome'] } },

      { params: { page: ['career'] } },
        { params: { page: ['career', 'Step-1'] } },
          { params: { page: ['career', 'Step-1', 'Chapter-1'] } },
          { params: { page: ['career', 'Step-1', 'Chapter-2'] } },
          { params: { page: ['career', 'Step-1', 'Chapter-3'] } },
          { params: { page: ['career', 'Step-1', 'Chapter-4'] } },
        { params: { page: ['career', 'Step-2'] } },
          { params: { page: ['career', 'Step-2', 'Task-1'] } },
          { params: { page: ['career', 'Step-2', 'Task-2'] } },
          { params: { page: ['career', 'Step-2', 'Task-3'] } },
        { params: { page: ['career', 'Step-3'] } },
          { params: { page: ['career', 'Step-3', 'Task-1'] } },
          { params: { page: ['career', 'Step-3', 'Task-2'] } },

      { params: { page: ['data'] } },
        { params: { page: ['data', 'Module-1'] } },
          { params: { page: ['data', 'Module-1', 'Project-1'] } },
            { params: { page: ['data', 'Module-1', 'Project-1', 'Resources'] } },
            { params: { page: ['data', 'Module-1', 'Project-1', 'Sprint-1'] } },
            { params: { page: ['data', 'Module-1', 'Project-1', 'Sprint-2'] } },
            { params: { page: ['data', 'Module-1', 'Project-1', 'Sprint-3'] } },
            { params: { page: ['data', 'Module-1', 'Project-1', 'Sprint-4'] } },
          { params: { page: ['data', 'Module-1', 'Project-2'] } },
            { params: { page: ['data', 'Module-1', 'Project-2', 'Machine-Learning-Fundamentals'] } },
            { params: { page: ['data', 'Module-1', 'Project-2', 'Sprint-1'] } },
            { params: { page: ['data', 'Module-1', 'Project-2', 'Sprint-2'] } },
            { params: { page: ['data', 'Module-1', 'Project-2', 'Sprint-3'] } },
            { params: { page: ['data', 'Module-1', 'Project-2', 'Sprint-4'] } },
            { params: { page: ['data', 'Module-1', 'Project-2', 'Sprint-5'] } },
          { params: { page: ['data', 'Module-1', 'Project-3'] } },
            { params: { page: ['data', 'Module-1', 'Project-3', 'Resources'] } },
            { params: { page: ['data', 'Module-1', 'Project-3', 'Sprint-1'] } },
            { params: { page: ['data', 'Module-1', 'Project-3', 'Sprint-2'] } },
            { params: { page: ['data', 'Module-1', 'Project-3', 'Sprint-3'] } },
          { params: { page: ['data', 'Module-1', 'Project-4'] } },
            { params: { page: ['data', 'Module-1', 'Project-4', 'Sprint-1'] } },
        { params: { page: ['data', 'Module-2'] } },
          { params: { page: ['data', 'Module-2', 'Project-5'] } },
            { params: { page: ['data', 'Module-2', 'Project-5', 'Sprint-1'] } },
            { params: { page: ['data', 'Module-2', 'Project-5', 'Sprint-2'] } },
            { params: { page: ['data', 'Module-2', 'Project-5', 'Sprint-3'] } },
            { params: { page: ['data', 'Module-2', 'Project-5', 'Sprint-4'] } },
        { params: { page: ['data', 'Module-3'] } },
          { params: { page: ['data', 'Module-3', 'Project-7'] } },
            { params: { page: ['data', 'Module-3', 'Project-7', 'Sprint-1'] } },

      { params: { page: ['web'] } },
        { params: { page: ['web', 'Module-1'] } },
          { params: { page: ['web', 'Module-1', 'Free-APIs'] } },
          { params: { page: ['web', 'Module-1', 'Project-1'] } },
            { params: { page: ['web', 'Module-1', 'Project-1', 'Resources'] } },
            { params: { page: ['web', 'Module-1', 'Project-1', 'Sprint-1'] } },
            { params: { page: ['web', 'Module-1', 'Project-1', 'Sprint-2'] } },
          { params: { page: ['web', 'Module-1', 'Project-2'] } },
            { params: { page: ['web', 'Module-1', 'Project-2', 'Resources'] } },
            { params: { page: ['web', 'Module-1', 'Project-2', 'Sprint-1'] } },
            { params: { page: ['web', 'Module-1', 'Project-2', 'Sprint-2'] } },
            { params: { page: ['web', 'Module-1', 'Project-2', 'Sprint-3'] } },
            { params: { page: ['web', 'Module-1', 'Project-2', 'Sprint-4'] } },
          { params: { page: ['web', 'Module-1', 'Project-3'] } },
            { params: { page: ['web', 'Module-1', 'Project-3', 'Resources'] } },
            { params: { page: ['web', 'Module-1', 'Project-3', 'Sprint-1'] } },
            { params: { page: ['web', 'Module-1', 'Project-3', 'Sprint-2'] } },
            { params: { page: ['web', 'Module-1', 'Project-3', 'Sprint-3'] } },
            { params: { page: ['web', 'Module-1', 'Project-3', 'Sprint-4'] } },
        { params: { page: ['web', 'Module-2'] } },
          { params: { page: ['web', 'Module-2', 'Project-1'] } },
            { params: { page: ['web', 'Module-2', 'Project-1', 'MERN-deployment'] } },
            { params: { page: ['web', 'Module-2', 'Project-1', 'Sprint-1'] } },
            { params: { page: ['web', 'Module-2', 'Project-1', 'Sprint-2'] } },
            { params: { page: ['web', 'Module-2', 'Project-1', 'Sprint-3'] } },
            { params: { page: ['web', 'Module-2', 'Project-1', 'Sprint-4'] } },
        { params: { page: ['web', 'Module-3'] } },
          { params: { page: ['web', 'Module-3', 'GraphQL'] } },
            { params: { page: ['web', 'Module-3', 'GraphQL', 'Client'] } },
          { params: { page: ['web', 'Module-3', 'Typescript'] } },
            { params: { page: ['web', 'Module-3', 'Typescript', 'Basics'] } },
            { params: { page: ['web', 'Module-3', 'Typescript', 'React'] } },
  ];
  return {
    paths,
    fallback: false,
  }
}

export default lms