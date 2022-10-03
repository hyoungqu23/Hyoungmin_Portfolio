import React from 'react';

type Props = {
  pageUrl?: string;
  githubUrl: string;
  notionUrl?: string;
  figmaUrl?: string;
  descriptions: string[];
};

const urlStyle = {
  hasUrl: 'text-primary',
  hasNotUrl: 'text-gray-500 line-through',
};

const ProjectDetail = ({ pageUrl, githubUrl, notionUrl, figmaUrl, descriptions }: Props) => (
  <div className="row-start-2 row-end-3">
    <div className="hidden gap-2 mb-2 lg:flex ">
      <a className={`${githubUrl ? urlStyle.hasUrl : urlStyle.hasNotUrl}`} href={githubUrl}>
        GitHub
      </a>
      <a className={`${pageUrl ? urlStyle.hasUrl : urlStyle.hasNotUrl}`} href={pageUrl}>
        Page
      </a>
      <a className={`${notionUrl ? urlStyle.hasUrl : urlStyle.hasNotUrl}`} href={notionUrl}>
        Notion
      </a>
      <a className={`${figmaUrl ? urlStyle.hasUrl : urlStyle.hasNotUrl}`} href={figmaUrl}>
        Figma
      </a>
    </div>
    <ul>
      {descriptions.map((description, index) => (
        <li
          key={description}
          className={`mb-1 text-sm hidden lg:block ${index % 2 ? 'text-primary' : 'text-pink-300'}`}
        >
          {description}
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectDetail;
