import { IMarkmapOptions } from 'markmap-common';
import { Transformer } from 'markmap-lib';
import * as markmap from 'markmap-view';
import { useEffect, useRef } from 'react';

interface Props {
  markdown: string;
}

export default ({ markdown }: Props) => {
  const { Markmap, loadCSS, loadJS } = markmap;

  const transformer = new Transformer();

  const useM = (md: string, option?: Partial<IMarkmapOptions>) => {
    const ref = useRef(null);
    useEffect(() => {
      ref.current.innerHTML = '';
      const { root, features } = transformer.transform(md);
      const { styles, scripts } = transformer.getUsedAssets(features);
      if (styles) loadCSS(styles);
      if (scripts) loadJS(scripts, { getMarkmap: () => markmap });
      Markmap.create(ref.current, option, root);
    }, [md, option]);
    return <svg ref={ref} className="w-3/4 h-[500px]"></svg>;
  };

  const M = useM(markdown, {
    initialExpandLevel: 1,
    autoFit: true,
    zoom: true,
    pan: true,
  });
  return (
    <>
      <section className="flex justify-center">{M}</section>
    </>
  );
};
