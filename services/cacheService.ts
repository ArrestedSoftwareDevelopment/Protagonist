/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { StoryFramework, Bookmark } from '../types';

const FRAMEWORK_PREFIX = 'story-framework-';
const BOOKMARKS_KEY = 'interactive-story-bookmarks';

function generateCacheKey(title: string): string {
    return `${FRAMEWORK_PREFIX}${title.toLowerCase().replace(/\s+/g, '-')}`;
}

export function getStoryFramework(title: string): StoryFramework | null {
    try {
        const cachedData = localStorage.getItem(generateCacheKey(title));
        if (cachedData) {
            return JSON.parse(cachedData) as StoryFramework;
        }
        return null;
    } catch (error) {
        console.error("Failed to retrieve story framework from cache:", error);
        return null;
    }
}

export function setStoryFramework(title: string, framework: StoryFramework): void {
    try {
        const dataToCache = JSON.stringify(framework);
        localStorage.setItem(generateCacheKey(title), dataToCache);
    } catch (error) {
        console.error("Failed to save story framework to cache:", error);
    }
}

export function getBookmarks(): Bookmark[] {
    try {
        const bookmarksData = localStorage.getItem(BOOKMARKS_KEY);
        return bookmarksData ? JSON.parse(bookmarksData) : [];
    } catch (error) {
        console.error("Failed to retrieve bookmarks:", error);
        return [];
    }
}

export function saveBookmark(bookmark: Bookmark): void {
    try {
        const bookmarks = getBookmarks();
        const existingIndex = bookmarks.findIndex(b => b.novelTitle === bookmark.novelTitle);
        if (existingIndex > -1) {
            bookmarks[existingIndex] = bookmark;
        } else {
            bookmarks.push(bookmark);
        }
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    } catch (error) {
        console.error("Failed to save bookmark:", error);
    }
}

export function deleteBookmark(title: string): void {
    try {
        let bookmarks = getBookmarks();
        bookmarks = bookmarks.filter(b => b.novelTitle !== title);
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    } catch (error) {
        console.error("Failed to delete bookmark:", error);
    }
}