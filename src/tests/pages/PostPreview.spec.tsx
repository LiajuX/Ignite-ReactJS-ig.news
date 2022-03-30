import { render, screen } from '@testing-library/react';
import { getSession } from 'next-auth/client';
import { mocked } from 'ts-jest/utils';

import { getPrismicClient } from '../../services/prismic';

import Post, { getServerSideProps } from '../../pages/posts/[slug]';

const post = { 
  slug: 'my-new-post', 
  title: 'My New Post', 
  content: '<p>Post content</p>', 
  updatedAt: 'March, 10th' 
}

jest.mock('next-auth/client');

jest.mock('../../services/prismic.ts');

describe('Post preview page', () => {
  it('renders correctly', () => {
    render(<Post post={post} />);
  
    expect(screen.getByText("My New Post")).toBeInTheDocument();
    expect(screen.getByText("Post content")).toBeInTheDocument();
  });
});
