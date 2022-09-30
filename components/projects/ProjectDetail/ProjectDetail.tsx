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

const ProjectDetail = (props: Props) => {
  return (
    <div className="row-start-2 row-end-3">
      <div className="hidden gap-2 mb-2 lg:flex ">
        <a
          className={`${props.githubUrl ? urlStyle.hasUrl : urlStyle.hasNotUrl}`}
          href={props.githubUrl}
        >
          GitHub
        </a>
        <a
          className={`${props.pageUrl ? urlStyle.hasUrl : urlStyle.hasNotUrl}`}
          href={props.pageUrl}
        >
          Page
        </a>
        <a
          className={`${props.notionUrl ? urlStyle.hasUrl : urlStyle.hasNotUrl}`}
          href={props.notionUrl}
        >
          Notion
        </a>
        <a
          className={`${props.figmaUrl ? urlStyle.hasUrl : urlStyle.hasNotUrl}`}
          href={props.figmaUrl}
        >
          Figma
        </a>
      </div>
      <ul>
        {props.descriptions.map((description, index) => (
          <li
            key={description}
            className={`mb-1 text-sm hidden lg:block ${
              index % 2 ? 'text-primary' : 'text-pink-300'
            }`}
          >
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;
