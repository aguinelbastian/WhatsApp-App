DO $$
DECLARE
  new_user_id uuid;
BEGIN
  -- Seed user 1: aguinel@gmail.com
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'aguinel@gmail.com') THEN
    new_user_id := gen_random_uuid();
    INSERT INTO auth.users (
      id, instance_id, email, encrypted_password, email_confirmed_at,
      created_at, updated_at, raw_app_meta_data, raw_user_meta_data,
      is_super_admin, role, aud,
      confirmation_token, recovery_token, email_change_token_new,
      email_change, email_change_token_current,
      phone, phone_change, phone_change_token, reauthentication_token
    ) VALUES (
      new_user_id,
      '00000000-0000-0000-0000-000000000000',
      'aguinel@gmail.com',
      crypt('Skip@Pass', gen_salt('bf')),
      NOW(), NOW(), NOW(),
      '{"provider": "email", "providers": ["email"]}',
      '{"name": "Admin"}',
      false, 'authenticated', 'authenticated',
      '', '', '', '', '', NULL, '', '', ''
    );

    INSERT INTO public.usuarios (id, email, nome, role, status)
    VALUES (new_user_id, 'aguinel@gmail.com', 'Admin', 'admin', 'ativo')
    ON CONFLICT (email) DO NOTHING;
  END IF;

  -- Seed user 2: aguinel@studio.com
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'aguinel@studio.com') THEN
    new_user_id := gen_random_uuid();
    INSERT INTO auth.users (
      id, instance_id, email, encrypted_password, email_confirmed_at,
      created_at, updated_at, raw_app_meta_data, raw_user_meta_data,
      is_super_admin, role, aud,
      confirmation_token, recovery_token, email_change_token_new,
      email_change, email_change_token_current,
      phone, phone_change, phone_change_token, reauthentication_token
    ) VALUES (
      new_user_id,
      '00000000-0000-0000-0000-000000000000',
      'aguinel@studio.com',
      crypt('Skip@Pass', gen_salt('bf')),
      NOW(), NOW(), NOW(),
      '{"provider": "email", "providers": ["email"]}',
      '{"name": "Admin Studio"}',
      false, 'authenticated', 'authenticated',
      '', '', '', '', '', NULL, '', '', ''
    );

    INSERT INTO public.usuarios (id, email, nome, role, status)
    VALUES (new_user_id, 'aguinel@studio.com', 'Admin Studio', 'admin', 'ativo')
    ON CONFLICT (email) DO NOTHING;
  END IF;
END $$;
