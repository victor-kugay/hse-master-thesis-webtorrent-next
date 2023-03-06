import {WEBTORRENT_CLIENT_CONFIG, RENDER_MEDIA_CONFIG} from '@/constants';
import {useEffect, useRef} from 'react';
import WebTorrent from 'webtorrent';
// @ts-ignore
import render from 'render-media';

export function MainPage(): JSX.Element {
  const webtorrentRef = useRef<WebTorrent.Instance>();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!webtorrentRef.current) {
        webtorrentRef.current = new WebTorrent();
      }
    }, []);

  const handleDownload = () => {
    if (!webtorrentRef.current || !inputRef.current || !containerRef.current) {
      return;
    }
    
    const input = inputRef.current;
    const client = webtorrentRef.current;

    client.add(input.value, WEBTORRENT_CLIENT_CONFIG, torrent => {
      torrent.files.forEach((file) => {
        render.append(file, containerRef.current, RENDER_MEDIA_CONFIG);
      });
    });
  };

  return (
    <div ref={containerRef}>
      <input ref={inputRef} />
      <button onClick={handleDownload}>Загрузить</button>
    </div>
  );
}
