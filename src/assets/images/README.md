# Изображения проекта

Эта папка содержит все статические изображения проекта.

## Структура

```
src/assets/images/
├── team/          # Фотографии команды
└── ...            # Другие изображения (если понадобятся)
```

## Использование изображений команды

1. **Поместите фотографии** в папку `team/`:
   - `member1.jpg` (или `.png`, `.webp`)
   - `member2.jpg`
   - `member3.jpg`
   - `member4.jpg`

   Или используйте описательные имена:
   - `backend-lead.jpg`
   - `ai-engineer.jpg`
   - `product-engineer.jpg`
   - `pitch-specialist.jpg`

2. **Раскомментируйте импорты** в `src/components/sections/Team.tsx`:
   ```typescript
   import member1Photo from '../../assets/images/team/member1.jpg';
   import member2Photo from '../../assets/images/team/member2.jpg';
   // и т.д.
   ```

3. **Раскомментируйте свойство photo** в массиве `teamMembers`:
   ```typescript
   {
     name: t.team.members.member1.name,
     // ...
     photo: member1Photo,
   }
   ```

## Рекомендации

- **Формат**: JPG, PNG или WebP
- **Размер**: Рекомендуется квадратные изображения (например, 400x400px или 600x600px)
- **Оптимизация**: Используйте сжатые изображения для лучшей производительности
- **Стиль**: Фотографии будут отображаться как круглые (rounded-full), поэтому убедитесь, что важные части лица находятся в центре

## Альтернативный вариант (public/)

Если вы хотите использовать изображения из папки `public/`, они будут доступны по пути `/team/member1.jpg`:

```typescript
photo: '/team/member1.jpg'
```

Но рекомендуется использовать `src/assets/` для изображений, которые импортируются в компоненты, так как Vite оптимизирует их автоматически.

