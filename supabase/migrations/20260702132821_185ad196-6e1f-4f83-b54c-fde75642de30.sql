CREATE POLICY "Public can view content images" ON storage.objects FOR SELECT USING (bucket_id = 'content-images');
CREATE POLICY "Authenticated can upload content images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'content-images');
CREATE POLICY "Authenticated can update content images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'content-images');
CREATE POLICY "Authenticated can delete content images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'content-images');