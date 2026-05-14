// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.5'
  }
  public: {
    Tables: {
      agendamentos: {
        Row: {
          cliente_id: string
          data_criacao: string | null
          data_hora: string
          id: string
          motivo_cancelamento: string | null
          observacoes: string | null
          profissional_id: string
          status: string | null
          tipo: string | null
        }
        Insert: {
          cliente_id: string
          data_criacao?: string | null
          data_hora: string
          id?: string
          motivo_cancelamento?: string | null
          observacoes?: string | null
          profissional_id: string
          status?: string | null
          tipo?: string | null
        }
        Update: {
          cliente_id?: string
          data_criacao?: string | null
          data_hora?: string
          id?: string
          motivo_cancelamento?: string | null
          observacoes?: string | null
          profissional_id?: string
          status?: string | null
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'agendamentos_cliente_id_fkey'
            columns: ['cliente_id']
            isOneToOne: false
            referencedRelation: 'clientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'agendamentos_cliente_id_fkey'
            columns: ['cliente_id']
            isOneToOne: false
            referencedRelation: 'vw_comportamento_alunos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'agendamentos_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'profissionais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'agendamentos_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_ocupacao_profissional'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'agendamentos_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_receitas_profissional'
            referencedColumns: ['id']
          },
        ]
      }
      agent_conversations: {
        Row: {
          conversation_id: string
          created_at: string
          id: number
          project_key: string | null
          user_id: string
        }
        Insert: {
          conversation_id: string
          created_at?: string
          id?: never
          project_key?: string | null
          user_id: string
        }
        Update: {
          conversation_id?: string
          created_at?: string
          id?: never
          project_key?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'agent_conversations_project_key_fkey'
            columns: ['project_key']
            isOneToOne: false
            referencedRelation: 'agent_projects'
            referencedColumns: ['project_key']
          },
        ]
      }
      agent_messages: {
        Row: {
          conversation_id: string | null
          created_at: string | null
          github_repo: string | null
          id: number
          llm_response: string | null
          message: string | null
          source: string | null
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          conversation_id?: string | null
          created_at?: string | null
          github_repo?: string | null
          id?: number
          llm_response?: string | null
          message?: string | null
          source?: string | null
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          conversation_id?: string | null
          created_at?: string | null
          github_repo?: string | null
          id?: number
          llm_response?: string | null
          message?: string | null
          source?: string | null
          timestamp?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      agent_projects: {
        Row: {
          created_at: string
          github_owner: string
          github_repo: string
          id: number
          is_active: boolean
          notes: string | null
          project_key: string
          project_name: string
          supabase_project_ref: string | null
          supabase_url: string | null
        }
        Insert: {
          created_at?: string
          github_owner: string
          github_repo: string
          id?: never
          is_active?: boolean
          notes?: string | null
          project_key: string
          project_name: string
          supabase_project_ref?: string | null
          supabase_url?: string | null
        }
        Update: {
          created_at?: string
          github_owner?: string
          github_repo?: string
          id?: never
          is_active?: boolean
          notes?: string | null
          project_key?: string
          project_name?: string
          supabase_project_ref?: string | null
          supabase_url?: string | null
        }
        Relationships: []
      }
      ai_agents: {
        Row: {
          created_at: string | null
          description: string | null
          gemini_api_key: string
          id: string
          is_active: boolean | null
          name: string
          system_prompt: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          gemini_api_key: string
          id?: string
          is_active?: boolean | null
          name: string
          system_prompt: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          gemini_api_key?: string
          id?: string
          is_active?: boolean | null
          name?: string
          system_prompt?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      audit_log: {
        Row: {
          acao: string
          dados_anteriores: Json | null
          dados_novos: Json | null
          data_acao: string | null
          id: string
          registro_id: string
          tabela: string
          usuario_id: string | null
        }
        Insert: {
          acao: string
          dados_anteriores?: Json | null
          dados_novos?: Json | null
          data_acao?: string | null
          id?: string
          registro_id: string
          tabela: string
          usuario_id?: string | null
        }
        Update: {
          acao?: string
          dados_anteriores?: Json | null
          dados_novos?: Json | null
          data_acao?: string | null
          id?: string
          registro_id?: string
          tabela?: string
          usuario_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'audit_log_usuario_id_fkey'
            columns: ['usuario_id']
            isOneToOne: false
            referencedRelation: 'usuarios'
            referencedColumns: ['id']
          },
        ]
      }
      clientes: {
        Row: {
          cpf: string | null
          data_criacao: string | null
          data_inicio: string
          email: string | null
          id: string
          nome: string
          observacoes: string | null
          status: string | null
          telefone: string | null
        }
        Insert: {
          cpf?: string | null
          data_criacao?: string | null
          data_inicio?: string
          email?: string | null
          id?: string
          nome: string
          observacoes?: string | null
          status?: string | null
          telefone?: string | null
        }
        Update: {
          cpf?: string | null
          data_criacao?: string | null
          data_inicio?: string
          email?: string | null
          id?: string
          nome?: string
          observacoes?: string | null
          status?: string | null
          telefone?: string | null
        }
        Relationships: []
      }
      consumo_pacote: {
        Row: {
          agendamento_id: string
          contrato_id: string
          data_consumo: string | null
          data_criacao: string | null
          id: string
          sessoes_consumidas: number | null
        }
        Insert: {
          agendamento_id: string
          contrato_id: string
          data_consumo?: string | null
          data_criacao?: string | null
          id?: string
          sessoes_consumidas?: number | null
        }
        Update: {
          agendamento_id?: string
          contrato_id?: string
          data_consumo?: string | null
          data_criacao?: string | null
          id?: string
          sessoes_consumidas?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'consumo_pacote_agendamento_id_fkey'
            columns: ['agendamento_id']
            isOneToOne: false
            referencedRelation: 'agendamentos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'consumo_pacote_contrato_id_fkey'
            columns: ['contrato_id']
            isOneToOne: false
            referencedRelation: 'contratos_cliente'
            referencedColumns: ['id']
          },
        ]
      }
      contact_identity: {
        Row: {
          canonical_phone: string | null
          created_at: string | null
          display_name: string | null
          id: string
          instance_id: string
          lid_jid: string | null
          phone_jid: string | null
          user_id: string
        }
        Insert: {
          canonical_phone?: string | null
          created_at?: string | null
          display_name?: string | null
          id?: string
          instance_id: string
          lid_jid?: string | null
          phone_jid?: string | null
          user_id: string
        }
        Update: {
          canonical_phone?: string | null
          created_at?: string | null
          display_name?: string | null
          id?: string
          instance_id?: string
          lid_jid?: string | null
          phone_jid?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'contact_identity_instance_id_fkey'
            columns: ['instance_id']
            isOneToOne: false
            referencedRelation: 'user_integrations'
            referencedColumns: ['id']
          },
        ]
      }
      contratos_cliente: {
        Row: {
          cliente_id: string
          data_criacao: string | null
          data_fim: string | null
          data_inicio: string
          data_primeira_parcela: string | null
          id: string
          modelo_cobranca: string | null
          observacoes: string | null
          pacote_id: string | null
          plano_id: string | null
          preco_pago: number
          quantidade_parcelas: number | null
          renovacao_proxima: string | null
          status: string | null
          tipo: string
        }
        Insert: {
          cliente_id: string
          data_criacao?: string | null
          data_fim?: string | null
          data_inicio?: string
          data_primeira_parcela?: string | null
          id?: string
          modelo_cobranca?: string | null
          observacoes?: string | null
          pacote_id?: string | null
          plano_id?: string | null
          preco_pago: number
          quantidade_parcelas?: number | null
          renovacao_proxima?: string | null
          status?: string | null
          tipo: string
        }
        Update: {
          cliente_id?: string
          data_criacao?: string | null
          data_fim?: string | null
          data_inicio?: string
          data_primeira_parcela?: string | null
          id?: string
          modelo_cobranca?: string | null
          observacoes?: string | null
          pacote_id?: string | null
          plano_id?: string | null
          preco_pago?: number
          quantidade_parcelas?: number | null
          renovacao_proxima?: string | null
          status?: string | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: 'contratos_cliente_cliente_id_fkey'
            columns: ['cliente_id']
            isOneToOne: false
            referencedRelation: 'clientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'contratos_cliente_cliente_id_fkey'
            columns: ['cliente_id']
            isOneToOne: false
            referencedRelation: 'vw_comportamento_alunos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'contratos_cliente_pacote_id_fkey'
            columns: ['pacote_id']
            isOneToOne: false
            referencedRelation: 'pacotes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'contratos_cliente_plano_id_fkey'
            columns: ['plano_id']
            isOneToOne: false
            referencedRelation: 'planos'
            referencedColumns: ['id']
          },
        ]
      }
      horarios_funcionamento: {
        Row: {
          ativo: boolean | null
          data_criacao: string | null
          dia_semana: number
          hora_fim: string
          hora_inicio: string
          id: string
          observacoes: string | null
          profissional_id: string | null
        }
        Insert: {
          ativo?: boolean | null
          data_criacao?: string | null
          dia_semana: number
          hora_fim: string
          hora_inicio: string
          id?: string
          observacoes?: string | null
          profissional_id?: string | null
        }
        Update: {
          ativo?: boolean | null
          data_criacao?: string | null
          dia_semana?: number
          hora_fim?: string
          hora_inicio?: string
          id?: string
          observacoes?: string | null
          profissional_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'fk_horarios_profissional'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'profissionais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'fk_horarios_profissional'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_ocupacao_profissional'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'fk_horarios_profissional'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_receitas_profissional'
            referencedColumns: ['id']
          },
        ]
      }
      import_jobs: {
        Row: {
          created_at: string | null
          id: string
          processed_items: number | null
          status: string | null
          total_items: number | null
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          processed_items?: number | null
          status?: string | null
          total_items?: number | null
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          processed_items?: number | null
          status?: string | null
          total_items?: number | null
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      pacotes: {
        Row: {
          ativo: boolean | null
          data_criacao: string | null
          descricao: string | null
          id: string
          nome: string
          preco: number
          quantidade_sessoes: number
          tipo: string
          validade_dias: number
        }
        Insert: {
          ativo?: boolean | null
          data_criacao?: string | null
          descricao?: string | null
          id?: string
          nome: string
          preco: number
          quantidade_sessoes: number
          tipo: string
          validade_dias: number
        }
        Update: {
          ativo?: boolean | null
          data_criacao?: string | null
          descricao?: string | null
          id?: string
          nome?: string
          preco?: number
          quantidade_sessoes?: number
          tipo?: string
          validade_dias?: number
        }
        Relationships: []
      }
      pagamentos: {
        Row: {
          agendamento_id: string | null
          cliente_id: string | null
          contrato_id: string
          data_criacao: string | null
          data_pagamento: string
          id: string
          metodo: string
          observacoes: string | null
          status: string | null
          tipo_pagamento: string | null
          valor: number
        }
        Insert: {
          agendamento_id?: string | null
          cliente_id?: string | null
          contrato_id: string
          data_criacao?: string | null
          data_pagamento?: string
          id?: string
          metodo: string
          observacoes?: string | null
          status?: string | null
          tipo_pagamento?: string | null
          valor: number
        }
        Update: {
          agendamento_id?: string | null
          cliente_id?: string | null
          contrato_id?: string
          data_criacao?: string | null
          data_pagamento?: string
          id?: string
          metodo?: string
          observacoes?: string | null
          status?: string | null
          tipo_pagamento?: string | null
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: 'fk_pagamentos_agendamento'
            columns: ['agendamento_id']
            isOneToOne: false
            referencedRelation: 'agendamentos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'fk_pagamentos_cliente'
            columns: ['cliente_id']
            isOneToOne: false
            referencedRelation: 'clientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'fk_pagamentos_cliente'
            columns: ['cliente_id']
            isOneToOne: false
            referencedRelation: 'vw_comportamento_alunos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'pagamentos_contrato_id_fkey'
            columns: ['contrato_id']
            isOneToOne: false
            referencedRelation: 'contratos_cliente'
            referencedColumns: ['id']
          },
        ]
      }
      pagamentos_aluguel: {
        Row: {
          data_criacao: string | null
          data_pagamento: string
          id: string
          metodo_pagamento: string
          observacoes: string | null
          profissional_id: string
          status: string | null
          valor: number
        }
        Insert: {
          data_criacao?: string | null
          data_pagamento: string
          id?: string
          metodo_pagamento: string
          observacoes?: string | null
          profissional_id: string
          status?: string | null
          valor: number
        }
        Update: {
          data_criacao?: string | null
          data_pagamento?: string
          id?: string
          metodo_pagamento?: string
          observacoes?: string | null
          profissional_id?: string
          status?: string | null
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: 'pagamentos_aluguel_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'profissionais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'pagamentos_aluguel_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_ocupacao_profissional'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'pagamentos_aluguel_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_receitas_profissional'
            referencedColumns: ['id']
          },
        ]
      }
      parcelas_planos: {
        Row: {
          contrato_id: string
          data_criacao: string | null
          data_pagamento: string | null
          data_vencimento: string
          id: string
          numero_parcela: number
          status: string | null
          valor_parcela: number
        }
        Insert: {
          contrato_id: string
          data_criacao?: string | null
          data_pagamento?: string | null
          data_vencimento: string
          id?: string
          numero_parcela: number
          status?: string | null
          valor_parcela: number
        }
        Update: {
          contrato_id?: string
          data_criacao?: string | null
          data_pagamento?: string | null
          data_vencimento?: string
          id?: string
          numero_parcela?: number
          status?: string | null
          valor_parcela?: number
        }
        Relationships: [
          {
            foreignKeyName: 'parcelas_planos_contrato_id_fkey'
            columns: ['contrato_id']
            isOneToOne: false
            referencedRelation: 'contratos_cliente'
            referencedColumns: ['id']
          },
        ]
      }
      periodos_fechamento: {
        Row: {
          data_criacao: string | null
          data_fim: string
          data_inicio: string
          id: string
          motivo: string
          observacoes: string | null
          profissional_id: string | null
        }
        Insert: {
          data_criacao?: string | null
          data_fim: string
          data_inicio: string
          id?: string
          motivo: string
          observacoes?: string | null
          profissional_id?: string | null
        }
        Update: {
          data_criacao?: string | null
          data_fim?: string
          data_inicio?: string
          id?: string
          motivo?: string
          observacoes?: string | null
          profissional_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'fk_periodos_profissional'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'profissionais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'fk_periodos_profissional'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_ocupacao_profissional'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'fk_periodos_profissional'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_receitas_profissional'
            referencedColumns: ['id']
          },
        ]
      }
      planos: {
        Row: {
          ativo: boolean | null
          data_criacao: string | null
          descricao: string | null
          duracao_dias: number
          frequencia: number
          id: string
          nome: string
          preco: number
          renovacao_tipo: string
          tipo: string
        }
        Insert: {
          ativo?: boolean | null
          data_criacao?: string | null
          descricao?: string | null
          duracao_dias: number
          frequencia: number
          id?: string
          nome: string
          preco: number
          renovacao_tipo: string
          tipo: string
        }
        Update: {
          ativo?: boolean | null
          data_criacao?: string | null
          descricao?: string | null
          duracao_dias?: number
          frequencia?: number
          id?: string
          nome?: string
          preco?: number
          renovacao_tipo?: string
          tipo?: string
        }
        Relationships: []
      }
      profissionais: {
        Row: {
          aluguel_fixo_mensal: number | null
          comissao_percentual: number
          cor_calendario: string | null
          data_criacao: string | null
          id: string
          nome: string
          percentual_tipo: string | null
          status: string | null
          tipo: string
          usuario_id: string
        }
        Insert: {
          aluguel_fixo_mensal?: number | null
          comissao_percentual?: number
          cor_calendario?: string | null
          data_criacao?: string | null
          id?: string
          nome: string
          percentual_tipo?: string | null
          status?: string | null
          tipo: string
          usuario_id: string
        }
        Update: {
          aluguel_fixo_mensal?: number | null
          comissao_percentual?: number
          cor_calendario?: string | null
          data_criacao?: string | null
          id?: string
          nome?: string
          percentual_tipo?: string | null
          status?: string | null
          tipo?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'profissionais_usuario_id_fkey'
            columns: ['usuario_id']
            isOneToOne: true
            referencedRelation: 'usuarios'
            referencedColumns: ['id']
          },
        ]
      }
      repasses_profissionais: {
        Row: {
          agendamento_id: string
          contrato_id: string | null
          data_aula: string
          data_criacao: string | null
          id: string
          percentual: number
          profissional_id: string
          status_pagamento: string | null
          tipo_repasse: string | null
          valor_bruto: number
          valor_repasse: number
        }
        Insert: {
          agendamento_id: string
          contrato_id?: string | null
          data_aula: string
          data_criacao?: string | null
          id?: string
          percentual: number
          profissional_id: string
          status_pagamento?: string | null
          tipo_repasse?: string | null
          valor_bruto: number
          valor_repasse: number
        }
        Update: {
          agendamento_id?: string
          contrato_id?: string | null
          data_aula?: string
          data_criacao?: string | null
          id?: string
          percentual?: number
          profissional_id?: string
          status_pagamento?: string | null
          tipo_repasse?: string | null
          valor_bruto?: number
          valor_repasse?: number
        }
        Relationships: [
          {
            foreignKeyName: 'repasses_profissionais_agendamento_id_fkey'
            columns: ['agendamento_id']
            isOneToOne: false
            referencedRelation: 'agendamentos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'repasses_profissionais_contrato_id_fkey'
            columns: ['contrato_id']
            isOneToOne: false
            referencedRelation: 'contratos_cliente'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'repasses_profissionais_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'profissionais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'repasses_profissionais_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_ocupacao_profissional'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'repasses_profissionais_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_receitas_profissional'
            referencedColumns: ['id']
          },
        ]
      }
      reposicoes: {
        Row: {
          agendamento_original_id: string
          agendamento_reposicao_id: string | null
          cliente_id: string
          data_criacao: string | null
          data_limite: string
          data_marcacao: string | null
          id: string
          observacoes: string | null
          profissional_id: string
          status: string | null
        }
        Insert: {
          agendamento_original_id: string
          agendamento_reposicao_id?: string | null
          cliente_id: string
          data_criacao?: string | null
          data_limite: string
          data_marcacao?: string | null
          id?: string
          observacoes?: string | null
          profissional_id: string
          status?: string | null
        }
        Update: {
          agendamento_original_id?: string
          agendamento_reposicao_id?: string | null
          cliente_id?: string
          data_criacao?: string | null
          data_limite?: string
          data_marcacao?: string | null
          id?: string
          observacoes?: string | null
          profissional_id?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'reposicoes_agendamento_original_id_fkey'
            columns: ['agendamento_original_id']
            isOneToOne: false
            referencedRelation: 'agendamentos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'reposicoes_agendamento_reposicao_id_fkey'
            columns: ['agendamento_reposicao_id']
            isOneToOne: false
            referencedRelation: 'agendamentos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'reposicoes_cliente_id_fkey'
            columns: ['cliente_id']
            isOneToOne: false
            referencedRelation: 'clientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'reposicoes_cliente_id_fkey'
            columns: ['cliente_id']
            isOneToOne: false
            referencedRelation: 'vw_comportamento_alunos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'reposicoes_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'profissionais'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'reposicoes_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_ocupacao_profissional'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'reposicoes_profissional_id_fkey'
            columns: ['profissional_id']
            isOneToOne: false
            referencedRelation: 'vw_receitas_profissional'
            referencedColumns: ['id']
          },
        ]
      }
      studio_config: {
        Row: {
          data_criacao: string | null
          email: string | null
          endereco: string | null
          id: string
          nome_studio: string
          telefone: string | null
        }
        Insert: {
          data_criacao?: string | null
          email?: string | null
          endereco?: string | null
          id?: string
          nome_studio?: string
          telefone?: string | null
        }
        Update: {
          data_criacao?: string | null
          email?: string | null
          endereco?: string | null
          id?: string
          nome_studio?: string
          telefone?: string | null
        }
        Relationships: []
      }
      test_webhooks: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
          llm_response: string | null
          message: string | null
          name: string | null
          source: string | null
          timestamp: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: never
          llm_response?: string | null
          message?: string | null
          name?: string | null
          source?: string | null
          timestamp: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: never
          llm_response?: string | null
          message?: string | null
          name?: string | null
          source?: string | null
          timestamp?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_integrations: {
        Row: {
          created_at: string | null
          evolution_api_key: string | null
          evolution_api_url: string | null
          id: string
          instance_name: string | null
          is_setup_completed: boolean
          is_webhook_enabled: boolean
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          evolution_api_key?: string | null
          evolution_api_url?: string | null
          id?: string
          instance_name?: string | null
          is_setup_completed?: boolean
          is_webhook_enabled?: boolean
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          evolution_api_key?: string | null
          evolution_api_url?: string | null
          id?: string
          instance_name?: string | null
          is_setup_completed?: boolean
          is_webhook_enabled?: boolean
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      usuarios: {
        Row: {
          avatar_url: string | null
          data_criacao: string | null
          email: string
          id: string
          nome: string
          role: string
          status: string | null
        }
        Insert: {
          avatar_url?: string | null
          data_criacao?: string | null
          email: string
          id?: string
          nome: string
          role: string
          status?: string | null
        }
        Update: {
          avatar_url?: string | null
          data_criacao?: string | null
          email?: string
          id?: string
          nome?: string
          role?: string
          status?: string | null
        }
        Relationships: []
      }
      whatsapp_contacts: {
        Row: {
          ai_agent_id: string | null
          ai_analysis_summary: string | null
          classification: string | null
          created_at: string | null
          id: string
          last_message_at: string | null
          phone_number: string | null
          pipeline_stage: string | null
          profile_picture_url: string | null
          push_name: string | null
          remote_jid: string
          score: number | null
          user_id: string
        }
        Insert: {
          ai_agent_id?: string | null
          ai_analysis_summary?: string | null
          classification?: string | null
          created_at?: string | null
          id?: string
          last_message_at?: string | null
          phone_number?: string | null
          pipeline_stage?: string | null
          profile_picture_url?: string | null
          push_name?: string | null
          remote_jid: string
          score?: number | null
          user_id: string
        }
        Update: {
          ai_agent_id?: string | null
          ai_analysis_summary?: string | null
          classification?: string | null
          created_at?: string | null
          id?: string
          last_message_at?: string | null
          phone_number?: string | null
          pipeline_stage?: string | null
          profile_picture_url?: string | null
          push_name?: string | null
          remote_jid?: string
          score?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'whatsapp_contacts_ai_agent_id_fkey'
            columns: ['ai_agent_id']
            isOneToOne: false
            referencedRelation: 'ai_agents'
            referencedColumns: ['id']
          },
        ]
      }
      whatsapp_messages: {
        Row: {
          contact_id: string | null
          created_at: string | null
          from_me: boolean | null
          id: string
          message_id: string
          raw: Json | null
          text: string | null
          timestamp: string | null
          type: string | null
          user_id: string
        }
        Insert: {
          contact_id?: string | null
          created_at?: string | null
          from_me?: boolean | null
          id?: string
          message_id: string
          raw?: Json | null
          text?: string | null
          timestamp?: string | null
          type?: string | null
          user_id: string
        }
        Update: {
          contact_id?: string | null
          created_at?: string | null
          from_me?: boolean | null
          id?: string
          message_id?: string
          raw?: Json | null
          text?: string | null
          timestamp?: string | null
          type?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'whatsapp_messages_contact_id_fkey'
            columns: ['contact_id']
            isOneToOne: false
            referencedRelation: 'whatsapp_contacts'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      vw_comportamento_alunos: {
        Row: {
          aulas_realizadas: number | null
          faltas: number | null
          formatos_contratacao: string | null
          id: string | null
          metodos_pagamento: string | null
          nome: string | null
          pagamentos_pendentes: number | null
          remarcacoes_pendentes: number | null
          status: string | null
          total_aulas_agendadas: number | null
        }
        Relationships: []
      }
      vw_ocupacao_profissional: {
        Row: {
          id: string | null
          nome: string | null
          slots_agendados: number | null
          slots_cancelados: number | null
          slots_realizados: number | null
          taxa_ocupacao_percentual: number | null
          tipo: string | null
          total_slots: number | null
        }
        Relationships: []
      }
      vw_receitas_profissional: {
        Row: {
          aulas_canceladas: number | null
          aulas_realizadas: number | null
          comissao_percentual: number | null
          comissao_profissional: number | null
          id: string | null
          nome: string | null
          receita_pacotes: number | null
          receita_planos: number | null
          tipo: string | null
          total_aulas: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      create_new_user: {
        Args: {
          p_avatar_url?: string
          p_email: string
          p_nome: string
          p_password: string
          p_role: string
        }
        Returns: string
      }
      delete_user: { Args: { p_user_id: string }; Returns: undefined }
      merge_whatsapp_contacts: {
        Args: {
          p_primary_contact_id: string
          p_secondary_contact_ids: string[]
          p_user_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

// ====== DATABASE EXTENDED CONTEXT (auto-generated) ======
// This section contains actual PostgreSQL column types, constraints, RLS policies,
// functions, triggers, indexes and materialized views not present in the type definitions above.
// IMPORTANT: The TypeScript types above map UUID, TEXT, VARCHAR all to "string".
// Use the COLUMN TYPES section below to know the real PostgreSQL type for each column.
// Always use the correct PostgreSQL type when writing SQL migrations.

// --- COLUMN TYPES (actual PostgreSQL types) ---
// Use this to know the real database type when writing migrations.
// "string" in TypeScript types above may be uuid, text, varchar, timestamptz, etc.
// Table: agendamentos
//   id: uuid (not null, default: gen_random_uuid())
//   cliente_id: uuid (not null)
//   profissional_id: uuid (not null)
//   data_hora: timestamp without time zone (not null)
//   tipo: character varying (nullable, default: 'aula'::character varying)
//   status: character varying (nullable, default: 'agendado'::character varying)
//   motivo_cancelamento: text (nullable)
//   observacoes: text (nullable)
//   data_criacao: timestamp without time zone (nullable, default: now())
// Table: agent_conversations
//   id: bigint (not null)
//   conversation_id: text (not null)
//   user_id: text (not null)
//   project_key: text (nullable)
//   created_at: timestamp without time zone (not null, default: now())
// Table: agent_messages
//   id: bigint (not null)
//   user_id: text (nullable)
//   message: text (nullable)
//   llm_response: text (nullable)
//   source: text (nullable)
//   timestamp: timestamp without time zone (nullable)
//   created_at: timestamp without time zone (nullable, default: now())
//   conversation_id: text (nullable)
//   github_repo: text (nullable)
// Table: agent_projects
//   id: bigint (not null)
//   project_key: text (not null)
//   project_name: text (not null)
//   github_owner: text (not null)
//   github_repo: text (not null)
//   supabase_project_ref: text (nullable)
//   supabase_url: text (nullable)
//   is_active: boolean (not null, default: true)
//   notes: text (nullable)
//   created_at: timestamp without time zone (not null, default: now())
// Table: ai_agents
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   name: text (not null)
//   description: text (nullable)
//   system_prompt: text (not null)
//   gemini_api_key: text (not null)
//   is_active: boolean (nullable, default: false)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
// Table: audit_log
//   id: uuid (not null, default: gen_random_uuid())
//   tabela: character varying (not null)
//   registro_id: uuid (not null)
//   acao: character varying (not null)
//   usuario_id: uuid (nullable)
//   dados_anteriores: jsonb (nullable)
//   dados_novos: jsonb (nullable)
//   data_acao: timestamp without time zone (nullable, default: now())
// Table: clientes
//   id: uuid (not null, default: gen_random_uuid())
//   nome: character varying (not null)
//   telefone: character varying (nullable)
//   email: character varying (nullable)
//   data_inicio: date (not null, default: CURRENT_DATE)
//   status: character varying (nullable, default: 'ativo'::character varying)
//   observacoes: text (nullable)
//   data_criacao: timestamp without time zone (nullable, default: now())
//   cpf: character varying (nullable)
// Table: consumo_pacote
//   id: uuid (not null, default: gen_random_uuid())
//   contrato_id: uuid (not null)
//   agendamento_id: uuid (not null)
//   data_consumo: timestamp without time zone (nullable, default: now())
//   sessoes_consumidas: integer (nullable, default: 1)
//   data_criacao: timestamp without time zone (nullable, default: now())
// Table: contact_identity
//   id: uuid (not null, default: gen_random_uuid())
//   instance_id: uuid (not null)
//   user_id: uuid (not null)
//   canonical_phone: text (nullable)
//   phone_jid: text (nullable)
//   lid_jid: text (nullable)
//   display_name: text (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
// Table: contratos_cliente
//   id: uuid (not null, default: gen_random_uuid())
//   cliente_id: uuid (not null)
//   tipo: character varying (not null)
//   plano_id: uuid (nullable)
//   pacote_id: uuid (nullable)
//   data_inicio: date (not null, default: CURRENT_DATE)
//   data_fim: date (nullable)
//   preco_pago: numeric (not null)
//   status: character varying (nullable, default: 'ativo'::character varying)
//   renovacao_proxima: date (nullable)
//   observacoes: text (nullable)
//   data_criacao: timestamp without time zone (nullable, default: now())
//   modelo_cobranca: character varying (nullable, default: 'antecipado'::character varying)
//   quantidade_parcelas: integer (nullable, default: 1)
//   data_primeira_parcela: date (nullable)
// Table: horarios_funcionamento
//   id: uuid (not null, default: gen_random_uuid())
//   dia_semana: integer (not null)
//   profissional_id: uuid (nullable)
//   hora_inicio: time without time zone (not null)
//   hora_fim: time without time zone (not null)
//   ativo: boolean (nullable, default: true)
//   observacoes: text (nullable)
//   data_criacao: timestamp without time zone (nullable, default: now())
// Table: import_jobs
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   type: text (not null)
//   status: text (nullable, default: 'running'::text)
//   total_items: integer (nullable, default: 0)
//   processed_items: integer (nullable, default: 0)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
// Table: pacotes
//   id: uuid (not null, default: gen_random_uuid())
//   nome: character varying (not null)
//   tipo: character varying (not null)
//   quantidade_sessoes: integer (not null)
//   preco: numeric (not null)
//   validade_dias: integer (not null)
//   descricao: text (nullable)
//   ativo: boolean (nullable, default: true)
//   data_criacao: timestamp without time zone (nullable, default: now())
// Table: pagamentos
//   id: uuid (not null, default: gen_random_uuid())
//   contrato_id: uuid (not null)
//   data_pagamento: date (not null, default: CURRENT_DATE)
//   valor: numeric (not null)
//   metodo: character varying (not null)
//   status: character varying (nullable, default: 'pendente'::character varying)
//   observacoes: text (nullable)
//   data_criacao: timestamp without time zone (nullable, default: now())
//   cliente_id: uuid (nullable)
//   agendamento_id: uuid (nullable)
//   tipo_pagamento: character varying (nullable, default: 'plano'::character varying)
// Table: pagamentos_aluguel
//   id: uuid (not null, default: gen_random_uuid())
//   profissional_id: uuid (not null)
//   valor: numeric (not null)
//   data_pagamento: date (not null)
//   metodo_pagamento: character varying (not null)
//   status: character varying (nullable, default: 'pendente'::character varying)
//   observacoes: text (nullable)
//   data_criacao: timestamp without time zone (nullable, default: now())
// Table: parcelas_planos
//   id: uuid (not null, default: gen_random_uuid())
//   contrato_id: uuid (not null)
//   numero_parcela: integer (not null)
//   valor_parcela: numeric (not null)
//   data_vencimento: date (not null)
//   data_pagamento: date (nullable)
//   status: character varying (nullable, default: 'pendente'::character varying)
//   data_criacao: timestamp without time zone (nullable, default: now())
// Table: periodos_fechamento
//   id: uuid (not null, default: gen_random_uuid())
//   data_inicio: date (not null)
//   data_fim: date (not null)
//   motivo: character varying (not null)
//   profissional_id: uuid (nullable)
//   observacoes: text (nullable)
//   data_criacao: timestamp without time zone (nullable, default: now())
// Table: planos
//   id: uuid (not null, default: gen_random_uuid())
//   nome: character varying (not null)
//   tipo: character varying (not null)
//   frequencia: integer (not null)
//   duracao_dias: integer (not null)
//   preco: numeric (not null)
//   renovacao_tipo: character varying (not null)
//   descricao: text (nullable)
//   ativo: boolean (nullable, default: true)
//   data_criacao: timestamp without time zone (nullable, default: now())
// Table: profissionais
//   id: uuid (not null, default: gen_random_uuid())
//   usuario_id: uuid (not null)
//   nome: character varying (not null)
//   tipo: character varying (not null)
//   comissao_percentual: numeric (not null, default: 0)
//   aluguel_fixo_mensal: numeric (nullable)
//   cor_calendario: character varying (nullable, default: '#3B82F6'::character varying)
//   status: character varying (nullable, default: 'ativo'::character varying)
//   data_criacao: timestamp without time zone (nullable, default: now())
//   percentual_tipo: character varying (nullable, default: 'por_aula'::character varying)
// Table: repasses_profissionais
//   id: uuid (not null, default: gen_random_uuid())
//   profissional_id: uuid (not null)
//   agendamento_id: uuid (not null)
//   valor_bruto: numeric (not null)
//   percentual: numeric (not null)
//   valor_repasse: numeric (not null)
//   data_aula: timestamp without time zone (not null)
//   status_pagamento: character varying (nullable, default: 'pendente'::character varying)
//   data_criacao: timestamp without time zone (nullable, default: now())
//   contrato_id: uuid (nullable)
//   tipo_repasse: character varying (nullable, default: 'aula_normal'::character varying)
// Table: reposicoes
//   id: uuid (not null, default: gen_random_uuid())
//   agendamento_original_id: uuid (not null)
//   cliente_id: uuid (not null)
//   profissional_id: uuid (not null)
//   status: character varying (nullable, default: 'pendente'::character varying)
//   data_limite: date (not null)
//   data_marcacao: timestamp without time zone (nullable)
//   agendamento_reposicao_id: uuid (nullable)
//   observacoes: text (nullable)
//   data_criacao: timestamp without time zone (nullable, default: now())
// Table: studio_config
//   id: uuid (not null, default: gen_random_uuid())
//   nome_studio: character varying (not null, default: 'Studio Tatiane Kafka Ghizoni'::character varying)
//   telefone: character varying (nullable)
//   email: character varying (nullable)
//   endereco: text (nullable)
//   data_criacao: timestamp without time zone (nullable, default: now())
// Table: test_webhooks
//   id: bigint (not null)
//   name: text (nullable)
//   email: text (nullable)
//   timestamp: timestamp without time zone (not null)
//   source: text (nullable)
//   created_at: timestamp without time zone (nullable, default: now())
//   user_id: text (nullable)
//   message: text (nullable)
//   llm_response: text (nullable)
// Table: user_integrations
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   evolution_api_url: text (nullable)
//   evolution_api_key: text (nullable)
//   instance_name: text (nullable)
//   status: text (nullable, default: 'DISCONNECTED'::text)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
//   is_setup_completed: boolean (not null, default: false)
//   is_webhook_enabled: boolean (not null, default: false)
// Table: usuarios
//   id: uuid (not null, default: gen_random_uuid())
//   email: character varying (not null)
//   nome: character varying (not null)
//   role: character varying (not null)
//   status: character varying (nullable, default: 'ativo'::character varying)
//   data_criacao: timestamp without time zone (nullable, default: now())
//   avatar_url: text (nullable)
// Table: vw_comportamento_alunos
//   id: uuid (nullable)
//   nome: character varying (nullable)
//   status: character varying (nullable)
//   total_aulas_agendadas: bigint (nullable)
//   aulas_realizadas: bigint (nullable)
//   faltas: bigint (nullable)
//   remarcacoes_pendentes: bigint (nullable)
//   pagamentos_pendentes: bigint (nullable)
//   formatos_contratacao: text (nullable)
//   metodos_pagamento: text (nullable)
// Table: vw_ocupacao_profissional
//   id: uuid (nullable)
//   nome: character varying (nullable)
//   tipo: character varying (nullable)
//   total_slots: bigint (nullable)
//   slots_agendados: bigint (nullable)
//   slots_realizados: bigint (nullable)
//   slots_cancelados: bigint (nullable)
//   taxa_ocupacao_percentual: numeric (nullable)
// Table: vw_receitas_profissional
//   id: uuid (nullable)
//   nome: character varying (nullable)
//   tipo: character varying (nullable)
//   comissao_percentual: numeric (nullable)
//   total_aulas: bigint (nullable)
//   aulas_realizadas: bigint (nullable)
//   aulas_canceladas: bigint (nullable)
//   receita_planos: numeric (nullable)
//   receita_pacotes: numeric (nullable)
//   comissao_profissional: numeric (nullable)
// Table: whatsapp_contacts
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   remote_jid: text (not null)
//   push_name: text (nullable)
//   profile_picture_url: text (nullable)
//   last_message_at: timestamp with time zone (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   classification: text (nullable)
//   score: integer (nullable, default: 0)
//   ai_analysis_summary: text (nullable)
//   phone_number: text (nullable)
//   ai_agent_id: uuid (nullable)
//   pipeline_stage: text (nullable, default: 'Em Espera'::text)
// Table: whatsapp_messages
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   contact_id: uuid (nullable)
//   message_id: text (not null)
//   from_me: boolean (nullable, default: false)
//   text: text (nullable)
//   type: text (nullable)
//   timestamp: timestamp with time zone (nullable)
//   raw: jsonb (nullable)
//   created_at: timestamp with time zone (nullable, default: now())

// --- CONSTRAINTS ---
// Table: agendamentos
//   FOREIGN KEY agendamentos_cliente_id_fkey: FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
//   PRIMARY KEY agendamentos_pkey: PRIMARY KEY (id)
//   FOREIGN KEY agendamentos_profissional_id_fkey: FOREIGN KEY (profissional_id) REFERENCES profissionais(id) ON DELETE CASCADE
//   CHECK agendamentos_status_check: CHECK (((status)::text = ANY ((ARRAY['agendado'::character varying, 'realizado'::character varying, 'cancelado'::character varying, 'falta_sem_aviso'::character varying, 'a_repor'::character varying])::text[])))
//   CHECK agendamentos_tipo_check: CHECK (((tipo)::text = ANY ((ARRAY['aula'::character varying, 'reposicao'::character varying])::text[])))
// Table: agent_conversations
//   UNIQUE agent_conversations_conversation_id_key: UNIQUE (conversation_id)
//   PRIMARY KEY agent_conversations_pkey: PRIMARY KEY (id)
//   FOREIGN KEY agent_conversations_project_key_fkey: FOREIGN KEY (project_key) REFERENCES agent_projects(project_key) ON UPDATE CASCADE
// Table: agent_messages
//   PRIMARY KEY agent_messages_pkey: PRIMARY KEY (id)
// Table: agent_projects
//   UNIQUE agent_projects_github_repo_key: UNIQUE (github_repo)
//   PRIMARY KEY agent_projects_pkey: PRIMARY KEY (id)
//   UNIQUE agent_projects_project_key_key: UNIQUE (project_key)
// Table: ai_agents
//   PRIMARY KEY ai_agents_pkey: PRIMARY KEY (id)
//   FOREIGN KEY ai_agents_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: audit_log
//   CHECK audit_log_acao_check: CHECK (((acao)::text = ANY ((ARRAY['INSERT'::character varying, 'UPDATE'::character varying, 'DELETE'::character varying])::text[])))
//   PRIMARY KEY audit_log_pkey: PRIMARY KEY (id)
//   FOREIGN KEY audit_log_usuario_id_fkey: FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
// Table: clientes
//   PRIMARY KEY clientes_pkey: PRIMARY KEY (id)
//   CHECK clientes_status_check: CHECK (((status)::text = ANY ((ARRAY['ativo'::character varying, 'pausado'::character varying, 'cancelado'::character varying])::text[])))
// Table: consumo_pacote
//   FOREIGN KEY consumo_pacote_agendamento_id_fkey: FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id) ON DELETE CASCADE
//   FOREIGN KEY consumo_pacote_contrato_id_fkey: FOREIGN KEY (contrato_id) REFERENCES contratos_cliente(id) ON DELETE CASCADE
//   PRIMARY KEY consumo_pacote_pkey: PRIMARY KEY (id)
// Table: contact_identity
//   FOREIGN KEY contact_identity_instance_id_fkey: FOREIGN KEY (instance_id) REFERENCES user_integrations(id) ON DELETE CASCADE
//   PRIMARY KEY contact_identity_pkey: PRIMARY KEY (id)
//   FOREIGN KEY contact_identity_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: contratos_cliente
//   FOREIGN KEY contratos_cliente_cliente_id_fkey: FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
//   FOREIGN KEY contratos_cliente_pacote_id_fkey: FOREIGN KEY (pacote_id) REFERENCES pacotes(id) ON DELETE SET NULL
//   PRIMARY KEY contratos_cliente_pkey: PRIMARY KEY (id)
//   FOREIGN KEY contratos_cliente_plano_id_fkey: FOREIGN KEY (plano_id) REFERENCES planos(id) ON DELETE SET NULL
//   CHECK contratos_cliente_status_check: CHECK (((status)::text = ANY ((ARRAY['ativo'::character varying, 'pausado'::character varying, 'cancelado'::character varying])::text[])))
//   CHECK contratos_cliente_tipo_check: CHECK (((tipo)::text = ANY ((ARRAY['plano'::character varying, 'pacote'::character varying])::text[])))
// Table: horarios_funcionamento
//   FOREIGN KEY fk_horarios_profissional: FOREIGN KEY (profissional_id) REFERENCES profissionais(id) ON DELETE CASCADE
//   CHECK horarios_funcionamento_dia_semana_check: CHECK (((dia_semana >= 0) AND (dia_semana <= 6)))
//   PRIMARY KEY horarios_funcionamento_pkey: PRIMARY KEY (id)
// Table: import_jobs
//   PRIMARY KEY import_jobs_pkey: PRIMARY KEY (id)
//   FOREIGN KEY import_jobs_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: pacotes
//   PRIMARY KEY pacotes_pkey: PRIMARY KEY (id)
//   CHECK pacotes_quantidade_sessoes_check: CHECK ((quantidade_sessoes > 0))
//   CHECK pacotes_tipo_check: CHECK (((tipo)::text = ANY ((ARRAY['pilates'::character varying, 'massoterapia'::character varying])::text[])))
//   CHECK pacotes_validade_dias_check: CHECK ((validade_dias = ANY (ARRAY[90, 180])))
// Table: pagamentos
//   FOREIGN KEY fk_pagamentos_agendamento: FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id)
//   FOREIGN KEY fk_pagamentos_cliente: FOREIGN KEY (cliente_id) REFERENCES clientes(id)
//   FOREIGN KEY pagamentos_contrato_id_fkey: FOREIGN KEY (contrato_id) REFERENCES contratos_cliente(id) ON DELETE CASCADE
//   CHECK pagamentos_metodo_check: CHECK (((metodo)::text = ANY ((ARRAY['pix'::character varying, 'transferencia'::character varying])::text[])))
//   PRIMARY KEY pagamentos_pkey: PRIMARY KEY (id)
//   CHECK pagamentos_status_check: CHECK (((status)::text = ANY ((ARRAY['pendente'::character varying, 'confirmado'::character varying, 'cancelado'::character varying])::text[])))
// Table: pagamentos_aluguel
//   PRIMARY KEY pagamentos_aluguel_pkey: PRIMARY KEY (id)
//   FOREIGN KEY pagamentos_aluguel_profissional_id_fkey: FOREIGN KEY (profissional_id) REFERENCES profissionais(id)
// Table: parcelas_planos
//   FOREIGN KEY parcelas_planos_contrato_id_fkey: FOREIGN KEY (contrato_id) REFERENCES contratos_cliente(id)
//   PRIMARY KEY parcelas_planos_pkey: PRIMARY KEY (id)
// Table: periodos_fechamento
//   FOREIGN KEY fk_periodos_profissional: FOREIGN KEY (profissional_id) REFERENCES profissionais(id) ON DELETE CASCADE
//   PRIMARY KEY periodos_fechamento_pkey: PRIMARY KEY (id)
// Table: planos
//   CHECK planos_duracao_dias_check: CHECK ((duracao_dias = ANY (ARRAY[30, 90, 180])))
//   CHECK planos_frequencia_check: CHECK ((frequencia = ANY (ARRAY[1, 2, 3])))
//   PRIMARY KEY planos_pkey: PRIMARY KEY (id)
//   CHECK planos_renovacao_tipo_check: CHECK (((renovacao_tipo)::text = ANY ((ARRAY['automatica'::character varying, 'manual'::character varying])::text[])))
//   CHECK planos_tipo_check: CHECK (((tipo)::text = ANY ((ARRAY['regular'::character varying, 'familia'::character varying])::text[])))
// Table: profissionais
//   PRIMARY KEY profissionais_pkey: PRIMARY KEY (id)
//   CHECK profissionais_status_check: CHECK (((status)::text = ANY ((ARRAY['ativo'::character varying, 'inativo'::character varying])::text[])))
//   CHECK profissionais_tipo_check: CHECK (((tipo)::text = ANY ((ARRAY['pilates'::character varying, 'massoterapia'::character varying])::text[])))
//   FOREIGN KEY profissionais_usuario_id_fkey: FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
//   UNIQUE profissionais_usuario_id_key: UNIQUE (usuario_id)
// Table: repasses_profissionais
//   FOREIGN KEY repasses_profissionais_agendamento_id_fkey: FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id)
//   FOREIGN KEY repasses_profissionais_contrato_id_fkey: FOREIGN KEY (contrato_id) REFERENCES contratos_cliente(id)
//   PRIMARY KEY repasses_profissionais_pkey: PRIMARY KEY (id)
//   FOREIGN KEY repasses_profissionais_profissional_id_fkey: FOREIGN KEY (profissional_id) REFERENCES profissionais(id)
// Table: reposicoes
//   FOREIGN KEY reposicoes_agendamento_original_id_fkey: FOREIGN KEY (agendamento_original_id) REFERENCES agendamentos(id) ON DELETE CASCADE
//   FOREIGN KEY reposicoes_agendamento_reposicao_id_fkey: FOREIGN KEY (agendamento_reposicao_id) REFERENCES agendamentos(id) ON DELETE SET NULL
//   FOREIGN KEY reposicoes_cliente_id_fkey: FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
//   PRIMARY KEY reposicoes_pkey: PRIMARY KEY (id)
//   FOREIGN KEY reposicoes_profissional_id_fkey: FOREIGN KEY (profissional_id) REFERENCES profissionais(id) ON DELETE CASCADE
//   CHECK reposicoes_status_check: CHECK (((status)::text = ANY ((ARRAY['pendente'::character varying, 'marcada'::character varying, 'expirada'::character varying, 'cancelada'::character varying])::text[])))
// Table: studio_config
//   PRIMARY KEY studio_config_pkey: PRIMARY KEY (id)
// Table: test_webhooks
//   PRIMARY KEY test_webhooks_pkey: PRIMARY KEY (id)
// Table: user_integrations
//   PRIMARY KEY user_integrations_pkey: PRIMARY KEY (id)
//   FOREIGN KEY user_integrations_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
//   UNIQUE user_integrations_user_id_key: UNIQUE (user_id)
// Table: usuarios
//   UNIQUE usuarios_email_key: UNIQUE (email)
//   PRIMARY KEY usuarios_pkey: PRIMARY KEY (id)
//   CHECK usuarios_role_check: CHECK (((role)::text = ANY ((ARRAY['admin'::character varying, 'professor'::character varying, 'massoterapeuta'::character varying, 'superuser'::character varying])::text[])))
//   CHECK usuarios_status_check: CHECK (((status)::text = ANY ((ARRAY['ativo'::character varying, 'inativo'::character varying])::text[])))
// Table: whatsapp_contacts
//   FOREIGN KEY whatsapp_contacts_ai_agent_id_fkey: FOREIGN KEY (ai_agent_id) REFERENCES ai_agents(id) ON DELETE SET NULL
//   PRIMARY KEY whatsapp_contacts_pkey: PRIMARY KEY (id)
//   FOREIGN KEY whatsapp_contacts_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
//   UNIQUE whatsapp_contacts_user_id_remote_jid_key: UNIQUE (user_id, remote_jid)
// Table: whatsapp_messages
//   FOREIGN KEY whatsapp_messages_contact_id_fkey: FOREIGN KEY (contact_id) REFERENCES whatsapp_contacts(id) ON DELETE CASCADE
//   PRIMARY KEY whatsapp_messages_pkey: PRIMARY KEY (id)
//   FOREIGN KEY whatsapp_messages_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
//   UNIQUE whatsapp_messages_user_id_message_id_key: UNIQUE (user_id, message_id)

// --- ROW LEVEL SECURITY POLICIES ---
// Table: agendamentos
//   Policy "admin_all_agendamentos" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_agendamentos" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_agendamentos" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_agendamentos" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_agendamentos" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "prof_insert_agendamentos" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['renata@studio.com'::text, 'miriam@studio.com'::text]))
//   Policy "prof_select_agendamentos" (SELECT, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['renata@studio.com'::text, 'miriam@studio.com'::text]))
//   Policy "prof_update_agendamentos" (UPDATE, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['renata@studio.com'::text, 'miriam@studio.com'::text]))
//   Policy "professor_delete_agendamentos" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['professor'::character varying, 'massoterapeuta'::character varying])::text[]))))
//   Policy "professor_insert_agendamentos" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['professor'::character varying, 'massoterapeuta'::character varying])::text[]))))
//   Policy "professor_select_agendamentos" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['professor'::character varying, 'massoterapeuta'::character varying])::text[]))))
//   Policy "professor_update_agendamentos" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['professor'::character varying, 'massoterapeuta'::character varying])::text[]))))
// Table: ai_agents
//   Policy "Users can manage their own AI agents" (ALL, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
// Table: audit_log
//   Policy "admin_all_audit" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_insert_audit" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_audit" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "prof_deny_audit" (ALL, PERMISSIVE) roles={public}
//     USING: false
//   Policy "professor_no_access_audit" (ALL, PERMISSIVE) roles={public}
//     USING: false
// Table: clientes
//   Policy "admin_all_clientes" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_clientes" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_clientes" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_clientes" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_clientes" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "prof_insert_clientes" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['renata@studio.com'::text, 'miriam@studio.com'::text]))
//   Policy "prof_select_clientes" (SELECT, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['renata@studio.com'::text, 'miriam@studio.com'::text]))
//   Policy "prof_update_clientes" (UPDATE, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['renata@studio.com'::text, 'miriam@studio.com'::text]))
//   Policy "professor_delete_clientes" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['professor'::character varying, 'massoterapeuta'::character varying])::text[]))))
//   Policy "professor_insert_clientes" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['professor'::character varying, 'massoterapeuta'::character varying])::text[]))))
//   Policy "professor_select_clientes" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['professor'::character varying, 'massoterapeuta'::character varying])::text[]))))
//   Policy "professor_update_clientes" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['professor'::character varying, 'massoterapeuta'::character varying])::text[]))))
// Table: consumo_pacote
//   Policy "admin_all_consumo" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_consumo" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_consumo" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_consumo" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_consumo" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
// Table: contact_identity
//   Policy "Users can manage their own contact identities" (ALL, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
// Table: contratos_cliente
//   Policy "admin_all_contratos" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_contratos" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_contratos" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_contratos" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_contratos" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "prof_select_contratos" (SELECT, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['renata@studio.com'::text, 'miriam@studio.com'::text]))
//   Policy "professor_select_contratos" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['professor'::character varying, 'massoterapeuta'::character varying])::text[]))))
// Table: horarios_funcionamento
//   Policy "admin_all_horarios" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_horarios" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_horarios" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_horarios" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_horarios" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
// Table: import_jobs
//   Policy "Users can manage their own import jobs" (ALL, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
// Table: pacotes
//   Policy "admin_all_pacotes" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_pacotes" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_pacotes" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_pacotes" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_pacotes" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "prof_select_pacotes" (SELECT, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['renata@studio.com'::text, 'miriam@studio.com'::text]))
//   Policy "professor_select_pacotes" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['professor'::character varying, 'massoterapeuta'::character varying])::text[]))))
// Table: pagamentos
//   Policy "admin_all_pagamentos" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_pagamentos" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_pagamentos" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_pagamentos" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_pagamentos" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "prof_deny_pagamentos" (ALL, PERMISSIVE) roles={public}
//     USING: false
//   Policy "professor_no_access_pagamentos" (ALL, PERMISSIVE) roles={public}
//     USING: false
// Table: periodos_fechamento
//   Policy "admin_all_periodos" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_periodos" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_periodos" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_periodos" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_periodos" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
// Table: planos
//   Policy "admin_all_planos" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_planos" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_planos" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_planos" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_planos" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "prof_select_planos" (SELECT, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['renata@studio.com'::text, 'miriam@studio.com'::text]))
//   Policy "professor_select_planos" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['professor'::character varying, 'massoterapeuta'::character varying])::text[]))))
// Table: profissionais
//   Policy "admin_all_profissionais" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_profissionais" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_profissionais" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_profissionais" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_profissionais" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
// Table: reposicoes
//   Policy "admin_all_reposicoes" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_reposicoes" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_reposicoes" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_reposicoes" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_reposicoes" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios.id    FROM usuarios   WHERE ((usuarios.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
// Table: test_webhooks
//   Policy "Allow insert" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: true
//   Policy "Allow select" (SELECT, PERMISSIVE) roles={public}
//     USING: true
// Table: user_integrations
//   Policy "Users can manage their own integrations" (ALL, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
// Table: usuarios
//   Policy "admin_all_usuarios" (ALL, PERMISSIVE) roles={public}
//     USING: ((auth.jwt() ->> 'email'::text) = ANY (ARRAY['tatiane@studio.com'::text, 'aguinel@studio.com'::text]))
//   Policy "admin_delete_usuarios" (DELETE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios_1.id    FROM usuarios usuarios_1   WHERE ((usuarios_1.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_insert_usuarios" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (auth.uid() IN ( SELECT usuarios_1.id    FROM usuarios usuarios_1   WHERE ((usuarios_1.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_select_usuarios" (SELECT, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios_1.id    FROM usuarios usuarios_1   WHERE ((usuarios_1.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
//   Policy "admin_update_usuarios" (UPDATE, PERMISSIVE) roles={public}
//     USING: (auth.uid() IN ( SELECT usuarios_1.id    FROM usuarios usuarios_1   WHERE ((usuarios_1.role)::text = ANY ((ARRAY['admin'::character varying, 'superuser'::character varying])::text[]))))
// Table: whatsapp_contacts
//   Policy "Users can manage their own contacts" (ALL, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)
// Table: whatsapp_messages
//   Policy "Users can manage their own messages" (ALL, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)

// --- DATABASE FUNCTIONS ---
// FUNCTION create_new_user(text, text, text, text, text)
//   CREATE OR REPLACE FUNCTION public.create_new_user(p_email text, p_password text, p_nome text, p_role text, p_avatar_url text DEFAULT NULL::text)
//    RETURNS uuid
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//   AS $function$
//   DECLARE
//     new_user_id uuid;
//   BEGIN
//     new_user_id := gen_random_uuid();
//
//     INSERT INTO auth.users (
//       id, instance_id, email, encrypted_password, email_confirmed_at,
//       created_at, updated_at, raw_app_meta_data, raw_user_meta_data,
//       is_super_admin, role, aud,
//       confirmation_token, recovery_token, email_change_token_new,
//       email_change, email_change_token_current,
//       phone, phone_change, phone_change_token, reauthentication_token
//     ) VALUES (
//       new_user_id,
//       '00000000-0000-0000-0000-000000000000',
//       p_email,
//       crypt(p_password, gen_salt('bf')),
//       NOW(), NOW(), NOW(),
//       '{"provider": "email", "providers": ["email"]}',
//       json_build_object('name', p_nome, 'avatar_url', p_avatar_url),
//       false, 'authenticated', 'authenticated',
//       '', '', '', '', '', NULL, '', '', ''
//     );
//
//     INSERT INTO public.usuarios (id, email, nome, role, avatar_url, status)
//     VALUES (new_user_id, p_email, p_nome, p_role, p_avatar_url, 'ativo')
//     ON CONFLICT (id) DO UPDATE SET avatar_url = EXCLUDED.avatar_url;
//
//     RETURN new_user_id;
//   END;
//   $function$
//
// FUNCTION delete_user(uuid)
//   CREATE OR REPLACE FUNCTION public.delete_user(p_user_id uuid)
//    RETURNS void
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//   AS $function$
//   BEGIN
//     DELETE FROM public.usuarios WHERE id = p_user_id;
//     DELETE FROM auth.users WHERE id = p_user_id;
//   END;
//   $function$
//
// FUNCTION merge_whatsapp_contacts(uuid, uuid, uuid[])
//   CREATE OR REPLACE FUNCTION public.merge_whatsapp_contacts(p_user_id uuid, p_primary_contact_id uuid, p_secondary_contact_ids uuid[])
//    RETURNS void
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//   AS $function$
//   BEGIN
//       -- Re-assign messages to the primary contact
//       UPDATE public.whatsapp_messages
//       SET contact_id = p_primary_contact_id
//       WHERE user_id = p_user_id
//         AND contact_id = ANY(p_secondary_contact_ids);
//
//       -- Delete the secondary duplicate contacts
//       DELETE FROM public.whatsapp_contacts
//       WHERE user_id = p_user_id
//         AND id = ANY(p_secondary_contact_ids);
//   END;
//   $function$
//

// --- INDEXES ---
// Table: agendamentos
//   CREATE INDEX idx_agendamentos_cliente ON public.agendamentos USING btree (cliente_id)
//   CREATE INDEX idx_agendamentos_data_hora ON public.agendamentos USING btree (data_hora)
//   CREATE INDEX idx_agendamentos_profissional ON public.agendamentos USING btree (profissional_id)
// Table: agent_conversations
//   CREATE UNIQUE INDEX agent_conversations_conversation_id_key ON public.agent_conversations USING btree (conversation_id)
// Table: agent_projects
//   CREATE UNIQUE INDEX agent_projects_github_repo_key ON public.agent_projects USING btree (github_repo)
//   CREATE UNIQUE INDEX agent_projects_project_key_key ON public.agent_projects USING btree (project_key)
// Table: clientes
//   CREATE UNIQUE INDEX clientes_cpf_key ON public.clientes USING btree (cpf) WHERE (cpf IS NOT NULL)
// Table: consumo_pacote
//   CREATE INDEX idx_consumo_pacote_contrato ON public.consumo_pacote USING btree (contrato_id)
// Table: contact_identity
//   CREATE UNIQUE INDEX idx_contact_identity_instance_phone ON public.contact_identity USING btree (instance_id, canonical_phone)
//   CREATE INDEX idx_contact_identity_lid_jid ON public.contact_identity USING btree (lid_jid)
//   CREATE INDEX idx_contact_identity_phone_jid ON public.contact_identity USING btree (phone_jid)
// Table: contratos_cliente
//   CREATE INDEX idx_contratos_cliente ON public.contratos_cliente USING btree (cliente_id)
//   CREATE INDEX idx_contratos_status ON public.contratos_cliente USING btree (status)
// Table: horarios_funcionamento
//   CREATE INDEX idx_horarios_profissional ON public.horarios_funcionamento USING btree (profissional_id)
// Table: pagamentos
//   CREATE INDEX idx_pagamentos_contrato ON public.pagamentos USING btree (contrato_id)
// Table: periodos_fechamento
//   CREATE INDEX idx_periodos_fechamento_profissional ON public.periodos_fechamento USING btree (profissional_id)
// Table: profissionais
//   CREATE UNIQUE INDEX profissionais_usuario_id_key ON public.profissionais USING btree (usuario_id)
// Table: reposicoes
//   CREATE INDEX idx_reposicoes_cliente ON public.reposicoes USING btree (cliente_id)
//   CREATE INDEX idx_reposicoes_data_limite ON public.reposicoes USING btree (data_limite)
//   CREATE INDEX idx_reposicoes_status ON public.reposicoes USING btree (status)
// Table: user_integrations
//   CREATE UNIQUE INDEX user_integrations_user_id_key ON public.user_integrations USING btree (user_id)
// Table: usuarios
//   CREATE UNIQUE INDEX usuarios_email_key ON public.usuarios USING btree (email)
// Table: whatsapp_contacts
//   CREATE INDEX whatsapp_contacts_phone_number_idx ON public.whatsapp_contacts USING btree (user_id, phone_number)
//   CREATE UNIQUE INDEX whatsapp_contacts_user_id_remote_jid_key ON public.whatsapp_contacts USING btree (user_id, remote_jid)
// Table: whatsapp_messages
//   CREATE UNIQUE INDEX whatsapp_messages_user_id_message_id_key ON public.whatsapp_messages USING btree (user_id, message_id)
